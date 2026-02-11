import express from 'express';
import gamesRouter from './routes/games.js';

const router = express.Router();

router.use('/games', gamesRouter);
export default router;