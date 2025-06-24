const express = require("express");
const router = express.Router();
const User = require("../models/user")
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
})

router.post("/signup",async(req,res)=>{
    let {username,email,password} = req.body;
    const newUser = new User({email,username})
    let registeruser = await User.register(newUser,password);
    console.log(registeruser);
    req.login(registeruser)
    res.redirect("/listings");
})

router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
})

router.post("/login",passport.authenticate('local', { failureRedirect: '/login' }),saveRedirectUrl,(req,res)=>{
res.redirect(res.locals.redirectUrl || "/listings");
})
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err) return next(err);
    });
    res.redirect("/listings");
})

module.exports = router;