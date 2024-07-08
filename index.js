import express, { json } from 'express';

import { UserRouter } from './routes/User.router.js'


const app = express();

app.use(express.json());
app.use('/user', UserRouter);

app.listen(3000, () => {

    console.log('Server auf port 3000');
})