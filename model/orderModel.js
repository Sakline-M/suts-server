import mongoose from "mongoose";

const orderSchema =new mongoose.Schema({
  email: {
    type: String,
  },
  course: {
    type: Object,
    message : ['error in course']
  },
});

const Order = mongoose.model("orders", orderSchema);

export default Order;
