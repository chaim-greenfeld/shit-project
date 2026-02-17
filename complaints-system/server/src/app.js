import express from 'express'
import 'dotenv/config';


import userRoutes from './routes/complaints.routes.js'

const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())



app.use('/api/complaints', userRoutes)


app.use('/api/admin/login', () => {})




app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});