import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    otpHash: {
        type: String,
        required: false,
    },
    otpCreatedAt: {
        type: Date,
        required: false,
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
