import express from 'express';
import messageModel from '../../models/messageModel.js';
const router = express.Router();


router.get('/detail', (req, res) => {
    try {
        res.send('All my details')
    } catch (err) {
        console.log(err);
        res.send({ error: err })
    }
})

router.post('/message', (req, res) => {
    const { name, email, phone, message } = req.body;
    const msg = new messageModel({ name, email, phone, message }).save();
    res.json({ msg })
})


export default router;