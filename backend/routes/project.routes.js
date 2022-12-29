import express from 'express';
const router = express.Router();

import { getProjects, createProject, updateProject, deleteProject } from '../controllers/project.controller.js';

router.get('/', getProjects);
router.post('/', createProject);
router.post('/update', updateProject);
router.post('/delete', deleteProject);

export default router;