import express from 'express';
import {getEvents,getEvent,createEvent,updateEvent,deleteEvent} from '../controllers/event.controller.js'

const router=express.Router();

router.get('/getEvents',getEvents);

router.get('/getEvent/:id',getEvent);

router.post('/addEvent',createEvent);

router.patch('/editEvent',updateEvent);

router.delete('/deleteEvent',deleteEvent);

export default router;