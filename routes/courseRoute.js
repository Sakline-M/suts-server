import express from "express";
import {
  getAllCourse,
  getSingleCourseData,
} from "../controller/courseController.js";

const router = express.Router();

//All routes
//COURSES || METHOD : GET
router.get("/", getAllCourse);
router.get("/:id", getSingleCourseData);

export default router;
