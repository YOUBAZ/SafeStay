import { Router } from 'express';

const router = Router();

// GET /api/bookings
router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'Bookings endpoint - Coming soon', data: [] });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

// POST /api/bookings
router.post('/', async (req, res) => {
    try {
        res.status(201).json({ message: 'Create booking endpoint - Coming soon' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

export default router;
