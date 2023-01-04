import mongoose from 'mongoose';
import Teams from '../models/team.model.js';

//get Teams
export const getTeams=async (req,res)=>{
    try{
        const team=await Teams.find().sort({year:-1,domain:1});
        res.status(200).json({message:"Fetched MLSC Team",data:team});
    }
    catch(e){
        res.status(404).json({message:"Failed to fetch MLSC Team",data:e.message});
    }
}

//get Teams by year
export const getTeamsByYear=async (req,res)=>{
    try{
        const year=req.params.year;
        const team=await Teams.find({year});
        res.status(200).json({message:"Fetched MLSC Team",data:team});
    }
    catch(e){
        res.status(404).json({message:"Failed to fetch MLSC Team",data:e.message});
    }
}

//get Teams by domain
export const getTeamsByDomain=async (req,res)=>{
    try{
        const domain=req.params.domain;
        const team=await Teams.find({domain});
        res.status(200).json({message:"Fetched MLSC Team",data:team});
    }
    catch(e){
        res.status(404).json({message:"Failed to fetch MLSC Team",data:e.message});
    }
}

// export const addTeamMember=async (req,res)=>{
//     if(Object.keys(req.body).length==0){
//         return res.status(400).json({message:"Failed to add Team Member"});
//     }
//     const {name,domain,image,role,position,year,linkedin,github,twitter,instagram,email,phoneNumber}=req.body;
//     const newMember=new Teams({
//         name:name,
//         domain:domain,
//         image:image,
//         role:role,
//         position:position,
//         year:year,
//         linkedin:linkedin,
//         github:github,
//         twitter:twitter,
//         instagram:instagram,
//         email:email,
//         phoneNumber:phoneNumber
//     });
//     try{
//         await newMember.save();
//         res.status(201).json({message:"Team Member Added",data:newMember}); 
//     }
//     catch(e){
//         res.status(404).json({message:"Failed to add Team Member",data:e.message});
//     }
// }

// export const deleteTeamMember=async(req,res)=>{
//     try{
//         const {id}=req.body;
//         if(Object.keys(req.body).length==0){
//             return res.status(400).json({message:"Failed to delete Team Member",data:"Empty Request"});
//         }
//         if(!id){
//             return res.status(400).json({message:"Failed to delete Member",data:"Empty Request, Id not provided"});
//         }
//         if(!mongoose.Types.ObjectId.isValid(id)){
//             return res.status(404).json({message:"Failed to delete Member",data:"No event with given Id exists"});
//         }
//         await Teams.findByIdAndRemove(id);
//         res.status(200).json({message:"Team Member successfully deleted",data:"Event successfully deleted"});
//     }
//     catch(e){
//         res.status(404).json({message:"Failed to delete Team Member",data:e.message});
//     }
// }