import express from 'express';
const router = express.Router();

router.get('/detail', (req, res) => {
    try {
        res.status(200).json({ message: 'All my details' })
    } catch (err) {
        console.log(err);
        res.json({ error: err })
    }
})


export default router;