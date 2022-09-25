const { verifyTknAndAthrz } = require("./verifyToken");

const router=require("express").Router();
const Stripe=require("stripe");
const stripe = Stripe('sk_test_51L8fWaJ2Aid2jG36u6lFZlQVTcYvnjqiZVrmwkndmDNOdagRtt0IDsJIEMvON9I7PYS3NVb0AuyinyDALJC5KYAl007afP2SQk');
router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd",
    }, (stripeError,stripeRes)=>{
        console.log(process.env.STRIPE_KEY)
        if(stripeError){
            res.status(500).json(stripeError);
            console.log(stripeError)
        }else {
            res.status(200).json(stripeRes);
            console.log(stripeRes)
        }
    })
})
module.exports=router;