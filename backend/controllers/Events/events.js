import mongoose from 'mongoose';
import Events from '../../models/event.model.js';

//read all events
export const getEvents=async (req,res)=>{
    try{
        const events=await Events.find();
        res.status(200).json({message:"Fetched all events",data:events});
    }   
    catch(e){
        res.status(404).json({message:"Failed to fetch events",data:e.message});
    }
}

//read single event
export const getEvent=async (req,res)=>{
    try{
        const {id}=req.params;
        const eventDetail=await Events.findById(id);
        if(!eventDetail){
            res.status(404).json({message:"Failed to fetch event, event with given ID does not exits, Bad Request"});
        }
        else{
            res.status(200).json({message:"Fetched event",data:eventDetail});
        }
    }
    catch(e){
        res.status(404).json({message:"Failed to fetch event",data:e.message});
    }
}

//new event
export const createEvent=async (req,res)=>{
    if(Object.keys(req.body).length==0){
        return res.status(400).json({message:"Failed to create event"});
    }
    const {title,venue,schedule,description,duration,date,thumbnail,images,registrationLink,isOnline,registrationFee}=req.body;
    const newEvent=new Events({
        title:title,
        venue:venue,
        schedule:schedule,
        description:description,
        duration:duration,
        date:date,
        thumbnail:thumbnail,
        images:images,
        registrationLink:registrationLink,
        isOnline:isOnline,
        registrationFee:registrationFee
    });
    //const updated={...newEvent,timestamps:new timeStamp()};
    try{
        await newEvent.save();
        res.status(201).json({message:"Event Added",data:newEvent});
    }
    catch(e){
        res.status(404).json({message:"Failed to create event",data:e.message});
    }
}

//update event
export const updateEvent=async(req,res)=>{
    try{

        const {id,title,venue,schedule,description,duration,date,thumbnail,images,registrationLink,isOnline,registrationFee}=req.body;
        const event=new Events({
            title:title,
            venue:venue,
            schedule:schedule,
            description:description,
            duration:duration,
            date:date,
            thumbnail:thumbnail,
            images:images,
            registrationLink:registrationLink,
            isOnline:isOnline,
            registrationFee:registrationFee
        });


        if(Object.keys(event).length==0){
            return res.status(400).json({message:"Failed to update event",data:"Empty Request"});
        }
        if(!id){
            return res.status(400).json({message:"Failed to update event",data:"Empty Request, Id not provided"});
        }
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:"Failed to update event",data:"No event with given Id exists"});
        }
        const updatedEvent=await Events.findByIdAndUpdate(id,{
            title:title,
            venue:venue,
            schedule:schedule,
            description:description,
            duration:duration,
            date:date,
            thumbnail:thumbnail,
            images:images,
            registrationLink:registrationLink,
            isOnline:isOnline,
            registrationFee:registrationFee
        },{new:true});
        res.status(201).json({message:"Event Updated",data:updatedEvent});
    }
    catch(e){
        res.status(404).json({message:"Failed to update event",data:e.message});
    }
}

//delete event
export const deleteEvent=async(req,res)=>{
    try{
        const {id}=req.body;
        if(Object.keys(req.body).length==0){
            return res.status(400).json({message:"Failed to delete event",data:"Empty Request"});
        }
        if(!id){
            return res.status(400).json({message:"Failed to delete event",data:"Empty Request, Id not provided"});
        }
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:"Failed to delete event",data:"No event with given Id exists"});
        }
        await Events.findByIdAndRemove(id);
        res.status(200).json({message:"Event successfully deleted",data:"Event successfully deleted"});
    }
    catch(e){
        res.status(404).json({message:"Failed to delete event",data:e.message});
    }
}