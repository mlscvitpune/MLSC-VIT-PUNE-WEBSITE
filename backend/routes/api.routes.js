import express from 'express';
import eventRoutes from './events.routes.js'
import projectRoutes from './project.routes.js';

const router=express.Router();

router.use('/events',eventRoutes);
router.use('/projects', projectRoutes);

export default router;