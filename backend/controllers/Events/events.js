import mongoose from 'mongoose';
import Events from '../../models/event.model.js';

//read all events
export const getEvents=async (req,res)=>{
    try{
        const events=await Events.find();
        res.status(200).json({message:"200",events});
    }   
    catch(e){
        res.status(404).json({message:"404",data:e.message});
    }
}

//read single event
export const getEvent=async (req,res)=>{
    try{
        const body=req.body;
        const id=body.id;
        const eventDetail=await Events.findById(id);
        if(!eventDetail){
            res.status(404).json({message:"404",data:"Event with given ID does not exits, Bad Request"});
        }
        else{
            res.status(200).json({message:"200",eventDetail});
        }
    }
    catch(e){
        res.status(404).json({message:"404",data:e.message});
    }
}

//new event
export const createEvent=async (req,res)=>{
    if(Object.keys(req.body).length==0){
        return res.status(400).json({message:"400",data:"Empty Request"});
    }
    console.log(req.body.id);
    const newEvent=Events(req.body);
    console.log(newEvent);
    //const updated={...newEvent,timestamps:new timeStamp()};
    try{
        await newEvent.save();
        res.status(201).json({message:"200",newEvent});
    }
    catch(e){
        res.status(404).json({message:"404",data:e.message});
    }
}

//update event
export const updateEvent=async(req,res)=>{
    try{
        const event=req.body;
        const id=event.id;
        if(Object.keys(event).length==0){
            return res.status(400).json({message:"400",data:"Empty Request"});
        }
        if(!id){
            return res.status(400).json({message:"400",data:"Empty Request, Id not provided"});
        }
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:"404",data:"No event with given Id exists"});
        }
        const updatedEvent=await Events.findByIdAndUpdate(id,{...event,id},{new:true});
        res.status(201).json({message:"200",updatedEvent});
    }
    catch(e){
        res.status(404).json({message:"404",data:e.message});
    }
}

//delete event
export const deleteEvent=async(req,res)=>{
    try{
        const id=req.body.id;
        if(Object.keys(req.body).length==0){
            return res.status(400).json({message:"400",data:"Empty Request"});
        }
        if(!id){
            return res.status(400).json({message:"400",data:"Empty Request, Id not provided"});
        }
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:"404",data:"No event with given Id exists"});
        }
        await Events.findByIdAndRemove(id);
        res.status(200).json({message:"200",data:"Event successfully deleted"});
    }
    catch(e){
        res.status(404).json({message:"404",data:e.message});
    }
}