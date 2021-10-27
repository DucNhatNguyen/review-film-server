import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { api } from './routers/index.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const HOST_NAME = process.env.HOST_NAME || 'localhost';

app.use(express.json())

app.use(cors())

app.use('/api', api);

app.listen(PORT, HOST_NAME, () => {
  console.log(`http://${HOST_NAME}:${PORT}/  -> is running`)
})

//http://localhost:5000/