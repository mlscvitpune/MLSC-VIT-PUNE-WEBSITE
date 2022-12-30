import express from 'express';

const router = express.Router();

router.post('/event',eventRoutes);

// router.post('/signup', signup);
// router.post('/login', login);

export default router;
