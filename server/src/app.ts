import express from 'express';
import cors from 'cors';
import { Task } from './models/Task';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/tasks', async (_req, res, _next) => {
  const tasks = await Task.findAll();

  res.status(200).json({ tasks: tasks });
});

app.post('/tasks', async (req, res, _next) => {
  const { title } = req.body;

  await Task.create({ title });

  const tasks = await Task.findAll();

  res.status(200).json({ tasks: tasks });
});

export { app };
