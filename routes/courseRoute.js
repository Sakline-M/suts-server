import express from "express";
import { getAllCourse } from "../controller/courseController.js";

const router = express.Router();

//All routes
//COURSES || METHOD : GET
router.get('/', getAllCourse)


export default router;
