import express from 'express';
import messageModel from '../models/messageModel.js';
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        data: "Server is running...",
    });
})

router.post('/message', (req, res) => {
    try {
        const { name, email, phone, msg } = req.body;
        const message = new messageModel({ name, email, phone, msg }).save();
        res.status(200).json({ name, email, phone, msg }).send('Success')
    } catch (err) {
        console.log(err)
    }
})


export default router;