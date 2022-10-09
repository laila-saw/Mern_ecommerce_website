const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }

})

// Login 
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const hashedPassword = CryptoJs.AES.decrypt(
                user.password, process.env.PASS_SEC
            );
            const pwd = hashedPassword.toString(CryptoJs.enc.Utf8);
            if (pwd === req.body.password) {
                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin
                },
                    process.env.JWT_SEC,
                    { expiresIn: "3d" }
                )
                const { password, ...others } = user._doc;
                res.status(201).json({ ...others, accessToken });
                console.log({ ...others, accessToken })
            } else {
                res.status(403).json("Wrong Password " + password + " " + req.body.password);
            }
        } else {
            res.status(403).json("Wrong Email");
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

})
module.exports = router;