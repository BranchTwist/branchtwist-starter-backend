import { AdminJS } from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import { ComponentLoader } from 'adminjs';
import AdminUser from './schemas/admin_user_schema.js';
import router from './routes/routes.js';
import { join, dirname } from 'path';
import { config } from 'dotenv';
import User from './schemas/user_schema.js';
import Todo from './schemas/todo_schema.js';

config();

const app = express();
const port = process.env.PORT || 8080;

AdminJS.registerAdapter(AdminJSMongoose);
const componentLoader = new ComponentLoader();
const components = {
    dashboard: componentLoader.add('dashboard', './dashboard'),
}

const adminJs = new AdminJS({
    branding: {
        companyName: 'BranchTwist',
        softwareBrothers: false,
        logo: '/logo.png'
    },
    resources: [
        {
            resource: User,
        },
        {
            resource: Todo,
        },
        {
            resource: AdminUser,
            options: {
                properties: {
                    passwordHash: {
                        isVisible: false,
                    },
                    password: {
                        type: 'string',
                        isVisible: {
                            list: false,
                            edit: true,
                            filter: false,
                            show: false,
                        },
                    },
                },
                actions: {
                    new: {
                        before: async (request) => {
                            if (request?.payload?.password) {
                                request.payload = {
                                    ...request.payload,
                                    passwordHash: await bcrypt.hash(request.payload.password, 10),
                                    password: undefined,
                                }
                            }
                            return request;
                        },
                    }
                }
            }
        },
    ],
    dashboard: {
        component: components.dashboard,
    },
    componentLoader,
    rootPath: '/admin',
});
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
        cookieName: process.env.ADMINJS_COOKIE_NAME,
        cookiePassword: process.env.ADMINJS_COOKIE_PASSWORD,
        authenticate: async (email, password) => {
            if (process.env.ENVIRONMENT === 'develop') {
                if (email === 'root' && password === 'root') {
                    return true;
                }
            }
            const user = await AdminUser.findOne({ email });
            if (user) {
                const matched = await bcrypt.compare(password, user.passwordHash);
                if (matched) {
                    return user;
                }
            }
            return false;
        },
    },
    null,
    {
        resave: false,
        saveUninitialized: true,
    }
);
app.use(adminJs.options.rootPath, adminRouter);
console.log(`BranchTwist Admin Portal is running, access with http://localhost:${port}/admin`);

app.enable('trust proxy');
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongoose: database connected successfully');
    })
    .catch((error) => {
        console.error('Mongoose: error connecting to the database', error);
    });

app.get('/', (req, res) => res.send('Welcome to BranchTwist API'));
app.use('/v1', router);
const __filename = new URL(import.meta.url).pathname;
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));
app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        message: 'API path not found',
    });
});

app.listen(port, () => {
    console.log(`BranchTwist API is running on port ${port}`);
});
