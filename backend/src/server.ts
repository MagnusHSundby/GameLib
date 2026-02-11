import express from 'express';
import dotenv from 'dotenv';
import router from './router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', router);

app.use('/api/health', (req, res) => {
	res.json({ status: 'ok', message:  "Server is running"});
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
