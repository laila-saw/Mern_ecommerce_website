const cryptoJs = require("crypto-js");
const Order = require("../models/Order");
const { verifyTknAndAthrz, verifyTknAndAdmin, verifyToken } = require("./verifyToken");
const router = require("express").Router();

// Create order
router.post("/createOrder", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})
// update order 
router.put("/:id", verifyTknAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedOrder);

    } catch (error) {
        res.status(500).json(error);
    }
})

// delete Order 
router.delete("/:id", verifyTknAndAdmin, async (req, res) => {
    try {
        const deletedOrder = await Order.findById(req.params.id);
        if (deletedOrder) {
            await Order.findByIdAndDelete(req.params.id);
            res.status(200).json("the Order is deleted successfuly!")
        } else {
            res.status(403).json("You can't delete this Order!")
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// get user Orders 
// this id is user id it's not cart id
// orders because user can have more then one order 
router.get("/find/:id", verifyTknAndAthrz, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.id });
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error);
    }
})

// get all carts of all users  
router.get("/", verifyTknAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})
// get monthly income 
router.get("/income", verifyTknAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:$sales}
                }
            }
        ]);
        res.status(200).json(income)
    }catch(error){
        res.status(500).json(error);
    }
})



module.exports = router;