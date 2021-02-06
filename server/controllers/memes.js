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