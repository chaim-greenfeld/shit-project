import express from 'express'
import cors from 'cors';
import 'dotenv/config';


import userRoutes from './routes/complaints.routes.js'
import authRoute from './routes/admin.route.js'


import { getMongoConnection } from './db/connect.js';

const PORT = process.env.PORT;

await getMongoConnection();




const app = express();

app.use(express.json())

app.use(cors());

app.use('/api/admin/login', authRoute)

app.use('/api/complaints', userRoutes)






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