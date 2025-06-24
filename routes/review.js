const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

router.post("/:id/reviews", wrapAsync(async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  const { rating, comment } = req.body.review;
  const review = new Review({ rating, comment });
  listing.reviews.push(review);
  await review.save();
  await listing.save();
  res.redirect(`/listings/${listing._id}`);
}));

// DELETE Review
router.delete("/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
  const { id, reviewId } = req.params;
await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
await Review.findByIdAndDelete(reviewId);
res.redirect(`/listings/${id}`);
}));

module.exports = router;