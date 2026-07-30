import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './lib/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    connectDB();
});
