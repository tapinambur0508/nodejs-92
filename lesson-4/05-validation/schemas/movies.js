const Joi = require("joi");

const movieSchema = Joi.object({
  title: Joi.string().required().min(10),
  year: Joi.number().required(),
  genre: Joi.string().required(),
});

module.exports = movieSchema;
