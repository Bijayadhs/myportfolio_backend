import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    msg: { type: String },
}, { timestramps: true })

const messageModel = mongoose.model('Message', messageSchema);
export default messageModel