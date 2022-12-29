import mongoose from 'mongoose';
import Events from '../../models/event.model.js';

//read all events
export const getEvents=async (req,res)=>{
    try{
        const event=await Events.find();
        res.status(200).json(event);
    }   
    catch(e){
        res.status(404).json({message:e.message});
    }
}

//read single event
export const getEvent=async (req,res)=>{
    try{
        const {id}=req.params;
        const eventDetail=await Events.findById(id);
        if(!eventDetail){
            res.status(404).json({message:"Event with given ID does not exits"});
        }
        else{
            res.status(200).json(eventDetail);
        }
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
}

//new event
export const createEvent=async (req,res)=>{
    const newEvent=Events(req.body);
    //const updated={...newEvent,timestamps:new timeStamp()};
    try{
        await newEvent.save();
        res.status(201).json(newEvent);
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
}

//update event
export const updateEvent=async(req,res)=>{
    try{
        const {id}=req.params;
        const post=req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message:"No event with given Id exists"});
        }
        const updatedEvent=await Events.findByIdAndUpdate(id,{...post,id},{new:true});
        res.status(201).json(updatedEvent);
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
}

//delete event
export const deleteEvent=async(req,res)=>{
    try{
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message:"No event with given Id exists"});
        }
        await Events.findByIdAndRemove(id);
        res.status(200).json({message:"Event successfully deleted"});
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
}