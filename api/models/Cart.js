const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    product: [
      {
        productId: {
          type: String,
          required: true
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          default: 0
        },
        title: {
          type: String,
        },
      },
    ],
    totalPrice: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
