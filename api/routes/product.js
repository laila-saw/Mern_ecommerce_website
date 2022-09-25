const cryptoJs = require("crypto-js");
const Product = require("../models/Product");
const {verifyTknAndAthrz, verifyTknAndAdmin } = require("./verifyToken");
const router=require("express").Router();

// Create product
router.post("/createProduct",verifyTknAndAdmin,async (req,res)=>{
    const newProduct= new Product(req.body)
    try{
        const savedProduct= await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(error){
        res.status(500).json(error)
    }
})
// update product 
router.put("/:id",verifyTknAndAdmin,async (req,res)=>{
    try {
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json(error);
    }
})

// delete product 
router.delete("/:id",verifyTknAndAdmin,async (req,res)=>{
    try{
        const deletedProduct=await Product.findById(req.params.id);
        if(deletedProduct){
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("the Product is deleted successfuly!")
        }else{
            res.status(403).json("You can't delete this Product!")
        }
    }catch(error){
        res.status(500).json(error);
    }
})

// get one product 
router.get("/find/:id",async (req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        if(product){
            res.status(200).json(product)
        }else{
            res.status(404).json("product not found!")
        }
       
    }catch(error){
        res.status(500).json(error);
    }
})

// get all products 
router.get("/",async (req,res)=>{
    const qNew =req.query.new;
    const qCategory =req.query.category;
    try{
       let products;

        if(qNew){
            products= await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qCategory){
            products=await Product.find({categories:{
                $in:[qCategory],
            },
        })
        }else {
            products=await Product.find();
        }
        res.status(200).json(products)
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
})




module.exports=router;