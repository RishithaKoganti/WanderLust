const express = require("express");
const app = express()
const port = 8080;
const mongoose = require('mongoose');
const Listing = require("C:\\Users\\koganti\\Documents\\WanderLust\\WanderLust\\models\\listing.js");
const path = require("path"); 
const methodOverride = require("method-override")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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
    res.render("listing/index.ejs",{listings})
    
})


//New Route
app.get("/listing/new",(req,res)=>{
    res.render("listing/new.ejs");
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
    res.render("listing/show.ejs",{listings})
})

//Edit Route
app.get("/listing/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    res.render("listing/edit.ejs",{listing});

})
//Update Route
app.put("/listing/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listing`);
})

//Delete Route

app.delete("/listing/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");
})






app.listen(port,()=>{
    console.log("Listening on port 8080");
})