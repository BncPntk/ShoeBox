import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

import app from './app.js';

// SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port:${port}`);
});
