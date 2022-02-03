const mongoose = require("mongoose");

const pizzasSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  addedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

module.exports =
  mongoose.models.pizzas || mongoose.model("pizzas", pizzasSchema);
