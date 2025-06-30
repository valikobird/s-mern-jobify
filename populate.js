import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './models/UserModel.js';
import { readFile } from 'fs/promises';
import JobModel from './models/JobModel.js';

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await UserModel.findOne({ email: 'test@test.com' });
  const jsonJobs = JSON.parse(await readFile(new URL('./utils/mockData.json', import.meta.url)));

  const jobs = jsonJobs.map((job) => ({ ...job, createdBy: user._id }));

  await JobModel.deleteMany({ createdBy: user._id });
  await JobModel.create(jobs);
  console.log('Demo data loaded');
  process.exit(0);
} catch (err) {
  console.log(err);
  process.exit(1);
}
