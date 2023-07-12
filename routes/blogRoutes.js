import express from "express";
import formidable from "express-formidable";
import { postRouter,getBlogRouter,blogPhotoController } from "../controller/blogController.js";

const router = express.Router();

//all routes
//POST BLOG
router.post("/blog-post", formidable(), postRouter);

//get all blog
router.get('/get-blog', getBlogRouter);
//get single blog
// router.get('/get-singleblog/:id', getSingleBlogRouter)

//get photo
router.get('/blog-photo/:pid', blogPhotoController)



export default router;
