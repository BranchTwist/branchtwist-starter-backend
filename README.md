# branchtwist-starter-backend
NodeJS - ExpressJS - Mongoose - AdminJS: starter template

### How to run

- Clone the repository
- Run command `npm install`
- Create `.env` file in root directory (see `.env` [example](#Example of `.env` file))
- Start MongoDB locally, or set `MONGODB_URI` to an online hosted database
- Run `npm start`

### Login to AdminJS

AdminJS instance can be accessed at `http://localhost:8080/admin`. By default, if the variable `ENVIRONMENT` in the `.env` file equals to `develop`, the admin paltform can be accessed with `email=root, password=root` (**DO NOT DEPLOY IN PROD `ENVIRONMENT=develop`**)

### Example of `.env` file
```
ENVIRONMENT=develop
ADMINJS_COOKIE_NAME=adminjs_cookie_name
ADMINJS_COOKIE_PASSWORD=adminjs_cookie_password
MONGODB_URI=mongodb://localhost:27017/branchtwist
SALT_ROUNDS=10
OTP_CODE_EXPIRATION_SECONDS=3600
JWT_SECRET=branchtwist_jwt_secret
```