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

router.post('/', async (req, res) => {
    const { name, genre } = req.body;
    try {
        const result = await query('INSERT INTO spill (navn, sjanger, utgivelsesdato) VALUES (?, ?, CURRENT_DATE) RETURNING *', [name, genre]);
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error adding game:', error);
        res.status(500).json({ error: 'Failed to add game' });
    }
});
export default router;
