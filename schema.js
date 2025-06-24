// schema.js
const Joi = require("joi");

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required().messages({
      "string.empty": "Title cannot be empty",
      "any.required": "Title is required"
    }),
    description: Joi.string().allow(""),
    image: Joi.string().uri().allow(""),
    price: Joi.number().min(0).required().messages({
      "number.base": "Price must be a number",
      "number.min": "Price must be at least 0"
    }),
    location: Joi.string().required().messages({
      "string.empty": "Location is required"
    }),
    country: Joi.string().required().messages({
      "string.empty": "Country is required"
    }),
  }).required()
});

module.exports = { listingSchema };
