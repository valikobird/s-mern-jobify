import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';

// routers
import jobRouter from './routes/jobRouter.js';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

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

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
