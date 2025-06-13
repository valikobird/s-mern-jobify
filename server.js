import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';

// routers
import jobRouter from './routes/jobRouter.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Test');
});

app.post('/', (req, res) => {
  res.json({ message: 'data received', data: req.body });
});

app.use('/api/v1/jobs', jobRouter);

app.all(/.*/, (req, res) => {
  res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'Internal Server Error' });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
