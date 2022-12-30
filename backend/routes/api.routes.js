import express from 'express';
import eventRoutes from './events.routes.js'

const router=express.Router();
router.use('/events',eventRoutes);
export default router;