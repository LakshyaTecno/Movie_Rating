const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {  
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  artists: {
    type: [String],
  },
  rating:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

module.exports = mongoose.model("movie", movieSchema);