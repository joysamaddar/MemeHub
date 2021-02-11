const mongoose = require("mongoose");
const MemePost = require("../models/memePost")

exports.getMemes = async (req,res, next)=>{
    try{
        const memes = await MemePost.find()
        res.status(200).json(memes);
    }catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

exports.postMeme = async (req, res,next)=>{
    const reqBody = req.body;
    const newMeme = new MemePost(reqBody) 
    try{
        await newMeme.save()
        res.status(201).json(newMeme)
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

exports.updateMeme = async (req,res,next)=>{
    const {id} = req.params;
    const meme = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No meme with that id!")
    const updatedMeme = await MemePost.findByIdAndUpdate(id, {...meme, _id: id}, {new: true});
    return res.status(200).json(updatedMeme);
}

exports.deleteMeme = async(req,res,next)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No meme with this id!")
    const result = await MemePost.findByIdAndDelete(id)
    return res.status(200).json(result);
}