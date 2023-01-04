import express from 'express';
import eventRoutes from './events.routes.js'
import projectRoutes from './project.routes.js';
import teamRoutes from './teams.routes.js';

const router=express.Router();

router.use('/events',eventRoutes);
router.use('/projects', projectRoutes);
router.use('/teams',teamRoutes);

export default router;