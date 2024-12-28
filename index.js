const express = require("express");
const app = express()
const port = 8080;
const mongoose = require('mongoose');
const Listing = require("C:\\Users\\koganti\\Documents\\WanderLust\\WanderLust\\models\\listing.js");
const path = require("path"); 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));

main()
.then(()=>{
    console.log("connected succesfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
//Basic Route
app.get("/",(req,res)=>{
    res.send("WORKING MOOD");
})
//Index Route
app.get("/listing",async(req,res)=>{
     let listings = await Listing.find({})
    res.render("index.ejs",{listings})
    
})


//New Route
app.get("/listing/new",(req,res)=>{
    res.render("new.ejs");
})

//Create Route
app.post("/listing",async(req,res)=>{
    let newlisting = await Listing.create(req.body.listing)
    newlisting.save();
    res.redirect("/listing");
})

//SHOW Route
app.get("/listing/:id",async(req,res)=>{
    let {id} =req.params;
    let listings = await Listing.findById(id)
    res.render("show.ejs",{listings})
})





app.listen(port,()=>{
    console.log("Listening on port 8080");
})