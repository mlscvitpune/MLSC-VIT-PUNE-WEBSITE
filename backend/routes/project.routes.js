import express from 'express';
const router = express.Router();

import { getProjects, getProject, createProject, updateProject, deleteProject } from '../controllers/project.controller.js';

router.get('/getProjects', getProjects);
router.get('/getProject/:id', getProject);
router.post('/createProject', createProject);
router.post('/updateProject', updateProject);
router.post('/deleteProject', deleteProject);

export default router;