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
