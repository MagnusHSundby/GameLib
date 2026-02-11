import { query } from '../dbconnector.js';  
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const games = await query('SELECT * FROM spill');
        res.json(games);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});	

export default router;
