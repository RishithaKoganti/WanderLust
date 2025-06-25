const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage })


function validateListing(req, res, next) {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const message = error.details.map(el => el.message).join(", ");
    throw new ExpressError(message, 400);
  }
  next();
}

// Index Route
router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find();
  res.render("listings/index.ejs", { allListings });
}));

// New Route
router.get("/new",isLoggedIn, (req, res) => {
 
  res.render("listings/new.ejs");
});

// Create Route
router.post("/", upload.single('listing[image]'),validateListing, wrapAsync(async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = {url,filename};
  await newListing.save();
  req.flash('success',"New listing created")
  res.redirect("/listings");
}));

// Show Route
router.get("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews").populate("owner");
  if (!listing) {
    throw new ExpressError("Listing not found", 404);
  }
  res.render("listings/show.ejs", { listing });
}));

// Edit Route
router.get("/:id/edit", isLoggedIn,wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    throw new ExpressError("Cannot edit. Listing not found!", 404);
  }
  res.render("listings/edit.ejs", { listing });
}));

// Update Route
router.put("/:id", validateListing,isLoggedIn,upload.single('listing[image]'), wrapAsync(async (req, res) => {
 
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file !=="undefined"){
   let url = req.file.path;
  let filename = req.file.filename;
  listing.image = {url,filename};
  await listing.save();
  }
  if (!listing) {
    throw new ExpressError("Cannot update. Listing not found!", 404);
  }
  res.redirect(`/listings/${id}`);
}));

// Delete Route
router.delete("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
}));

module.exports = router;