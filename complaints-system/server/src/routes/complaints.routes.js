import express from 'express'
const router = express.Router();


router.post('/', (req, res) => {
    res.send('its post')
})

router.get('/', (req, res) => {
    res.send(`User profile for ID: ${req.params.id}`);
})

export default router;