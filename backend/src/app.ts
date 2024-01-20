import shoeRouter from '../routes/shoeRoutes.js';
import userRouter from '../routes/userRoutes.js';

import express from 'express';

const app = express();

app.use(express.json());

app.use('/api/v1/shoes', shoeRouter);
app.use('/api/v1/users', userRouter);

export default app;
