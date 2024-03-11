import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    done: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
