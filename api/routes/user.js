const cryptoJs = require("crypto-js");
const { findById, findByIdAndDelete } = require("../models/User");
const User = require("../models/User");
const {verifyTknAndAthrz, verifyTknAndAdmin } = require("./verifyToken");
const router=require("express").Router();

// update user 
router.put("/:id",verifyTknAndAthrz,async (req,res)=>{
    if(req.body.password){
        req.body.password= cryptoJs.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        const {password, ...others}=updatedUser._doc;
        res.status(200).json(others);
        
    } catch (error) {
        res.status(500).json(error);
    }
})

// delete user 
router.delete("/:id",verifyTknAndAthrz,async (req,res)=>{
    try{
        const deletedUser=await User.findById(req.params.id);
        if(deletedUser){
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("the user is deleted successfuly!")
        }else{
            res.status(403).json("You can't delete this user!")
        }
    }catch(error){
        res.status(500).json(error);
    }
})
// get one user 
router.get("/find/:id",verifyTknAndAdmin,async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(user){
             const {password, ...others}=user._doc;
            res.status(200).json(others)
        }else{
            res.status(404).json("user not found!")
        }
       
    }catch(error){
        res.status(500).json(error);
    }
})
// get all user 
router.get("/",verifyTknAndAdmin,async (req,res)=>{
    const query =req.query.new;
    try{
        const users=query
        ? await User.find().sort({_id:-1}).limit(5)
        : await User.find();
        res.status(200).json(users);
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
})
//get user stats
router.get("/stats",verifyTknAndAdmin,async (req,res)=>{
    const date=new Date();
    const lastYear=new Date(date.setFullYear(date.getFullYear() - 1));
    try{
        const data = await User.aggregate([
            { $match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: { $month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1}
                }
            }
        ])
        res.status(200).json(data);
        console.log(data)
    }catch(error){
        res.status(500).json(error);
        console.log(error)
    }
})


module.exports=router;