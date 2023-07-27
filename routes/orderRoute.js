import exprss from "express";
import {
  getUserAllOrder,
  
  handleDelete,
  
  handleDeleteById,
  
  postOrder,
} from "../controller/orderController.js";

const router = exprss.Router();

//All routes
//DELETE ORDER || METHOD : DELETE
router.delete("/:id", handleDeleteById)
router.delete('/', handleDelete)

//POST ORDER || METHOD : POST
router.post("/", postOrder);

//GET ORDER || METHOD : GET
router.get("/", getUserAllOrder);

export default router;
