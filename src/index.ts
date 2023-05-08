import express from 'express';
import requestRouter from './routes/requests';
const app = express();
app.use(express.json());
import cors from 'cors';

const PORT = process.env.PORT || 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use('/api/requests', requestRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});