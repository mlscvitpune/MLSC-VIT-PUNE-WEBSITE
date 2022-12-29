import express from 'express';
import 'dotenv/config';

import cors from 'cors';

const app = express();
const port = process.env.PORT;

import './db/conn.js';
import eventRoutes from './routes/events.js';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('SERVER IS RUNNING');
});

// app.use('/auth', authRoutes);
app.use('/event',eventRoutes);
// app.use('/event',(req,res)=>{
//   res.status(200).send("Hello from Event");
// });

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
