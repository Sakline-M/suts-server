import { query } from "express";
import Order from "../model/orderModel.js";

export const postOrder = async (req, res) => {
  try {
    const order = Order(req.body);
    const result = await order.save();
    res.send(result);
  } catch (error) {
    res.status(500).send({
      success: false,
      messasge: "Order Fail",
      error,
    });
  }
};

export const getUserAllOrder = async (req, res) => {
  try {
    // get user email
    const email = req.query.email;
    // query
    const query = { email: email };

    // send res
    const result = await Order.find(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      success: false,
      messasge: "Order Fail",
      error,
    });
  }
};

export const handleDeleteById = async (req, res) => {
  try {
    // get id
    const id = req.params.id;

    // send res
    const result = await Order.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      messasge: "Course remove from cart",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      messasge: "Order Fail",
      error,
    });
  }
};

export const handleDelete = async (req, res) => {
  try {
    // send res
    const result = await Order.deleteMany({})
    res.status(200).send({
      success: true,
      messasge: "Course remove from cart",
    });
    
  } catch (error) {
    res.status(500).send({
      success: false,
      messasge: "Order Fail",
      error,
    });
  }
};

