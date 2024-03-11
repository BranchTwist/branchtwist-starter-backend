import mongoose from 'mongoose';

const { Schema } = mongoose;

const adminUserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "restricted"],
        required: true
    },
}, {
    timestamps: true
});

const AdminUser = mongoose.model('AdminUser', adminUserSchema);

export default AdminUser;
