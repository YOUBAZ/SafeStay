import { Router } from 'express';

const router = Router();

// GET /api/payments
router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'Payments endpoint - Coming soon', data: [] });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch payments' });
    }
});

// POST /api/payments
router.post('/', async (req, res) => {
    try {
        res.status(201).json({ message: 'Create payment endpoint - Coming soon' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create payment' });
    }
});

export default router;
