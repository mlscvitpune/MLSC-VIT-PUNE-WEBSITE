import express from 'express';

import projectRoutes from './project.routes.js';

const router = express.Router();

router.use('/projects', projectRoutes);

export default router;