import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import app from './app.js';

const dbPassword = process.env.DB_PASSWORD as string;
const db = process.env.DB?.replace('<password>', dbPassword) as string;

mongoose
  .connect(db)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port:${port}`);
});
