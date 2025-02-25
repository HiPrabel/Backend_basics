import mongoose from 'mongoose'

// sub schema structure for personal use & enum for optional input

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number, 
    required: true,
  },
})

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderItems: {
    type: [orderItemSchema],
  },
  // can also be done like above for specific address
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Delivered", "Cancelled"],
    default: "Pending"
  }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)