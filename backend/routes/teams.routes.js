import express from 'express';
import {getTeams,getTeamsByYear,getTeamsByDomain} from '../controllers/team.controller.js';

const router=express.Router();

router.get('/getTeams',getTeams);

router.get('/getTeams/year/:year',getTeamsByYear);

router.get('/getTeams/domain/:domain',getTeamsByDomain);

// router.post('/addTeamMember',addTeamMember);

// router.delete('/deleteTeamMember',deleteTeamMember);

export default router;