const cryptoJs = require("crypto-js");
const Cart = require("../models/Cart");
const {verifyTknAndAthrz, verifyTknAndAdmin, verifyToken } = require("./verifyToken");
const router=require("express").Router();

// Create cart
router.post("/createCart",verifyToken,async (req,res)=>{
    const newCart= new Cart(req.body)
    try{
        const savedCart= await newCart.save();
        res.status(200).json(savedCart)
    }catch(error){
        res.status(500).json(error)
    }
})
// update cart 
router.put("/:id",verifyTknAndAthrz,async (req,res)=>{
    try {
        const updatedCart=await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedCart);
        
    } catch (error) {
        res.status(500).json(error);
    }
})

// delete cart 
router.delete("/:id",verifyTknAndAthrz,async (req,res)=>{
    try{
        const deletedCart=await Cart.findById(req.params.id);
        if(deletedCart){
            await Cart.findByIdAndDelete(req.params.id);
            res.status(200).json("the Cart is deleted successfuly!")
        }else{
            res.status(403).json("You can't delete this Cart!")
        }
    }catch(error){
        res.status(500).json(error);
    }
})

// get user cart 
// this id is user id it's not cart id
router.get("/find/:id",verifyTknAndAthrz,async (req,res)=>{
    try{
        const cart=await Cart.findOne({userId:req.params.id});
        res.status(200).json(cart)
    }catch(error){
        res.status(500).json(error);
    }
})

// get all carts of all users  
router.get("/",verifyTknAndAdmin,async (req,res)=>{
    try{
        const carts=await Cart.find();
        res.status(200).json(carts)
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
})




module.exports=router;