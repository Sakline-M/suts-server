import exprss from "express";
import { getAllStduy, postAStudy } from "../controller/studyController.js";


const router = exprss.Router();

//All routes

//POST STUDY || METHOD : POST
router.post("/", postAStudy);

//GET STUDY || METHOD : GET
router.get("/", getAllStduy);

export default router;
