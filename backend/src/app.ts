import shoeRouter from '../routes/shoeRoutes.js';
import userRouter from '../routes/userRoutes.js';

import cors from 'cors';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      'http://127.0.0.1:5173',
      'https://bncpntk-shoebox.netlify.app',
      'http://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }),
);

app.use('/public', express.static(path.join(__dirname, '../public')));
console.log('Resolved path:', path.join(__dirname, '../public/'));

app.use('/api/v1/shoes', shoeRouter);
app.use('/api/v1/users', userRouter);

export default app;
