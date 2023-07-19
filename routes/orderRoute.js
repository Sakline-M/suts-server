import exprss from "express";
import { getUserAllOrder, postOrder } from "../controller/orderController.js";


const router = exprss.Router();

//All routes
//POST ORDER || METHOD : POST
router.post('/', postOrder)

//GET ORDER || METHOD : GET
router.get("/", getUserAllOrder);

export default router;
