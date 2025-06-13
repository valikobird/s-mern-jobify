import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import morgan from 'morgan';
import {nanoid} from 'nanoid';

let jobs = [
  {id: nanoid(), company: 'apple', position: 'front-end'},
  {id: nanoid(), company: 'google', position: 'back-end'},
]

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Test');
});

app.post('/', (req, res) => {
  res.json({message: 'data received', data: req.body});
})

app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({jobs});
})

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});