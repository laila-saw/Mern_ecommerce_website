// create express servier 
const express = require("express")
// to use it  : 
const app= express()

// connect the server to mongoDB 
const mongoose = require("mongoose")
// to use .env we should import the labrerry
const dotenv = require("dotenv")
const cors=require("cors");
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const cartRoute=require("./routes/cart")
const orderRoute=require("./routes/order")
const stripeRoute=require("./routes/stripe");
dotenv.config()
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("db connection successful"))
.catch((error)=>{
    console.log(error)
})
// start our application 
app.use(cors());
app.use(express.json())
app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)
app.use('/api/checkout',stripeRoute)
// to run express() we should listening to a port 
app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend server is runing");
})