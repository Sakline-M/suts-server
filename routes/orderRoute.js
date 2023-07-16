import exprss from "express";
import { postOrder } from "../controller/orderController.js";


const router = exprss.Router();

//All routes
//POST ORDER || METHOD : POST
router.post('/', postOrder)

export default router;
