import blogModel from "../model/blogModel.js";
import fs from "fs";

export const postRouter = async (req, res) => {
  try {
    const { name, description } = req.fields;
    const { photo } = req.files;
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const blogs = new blogModel({ ...req.fields });
    if (photo) {
      blogs.photo.data = fs.readFileSync(photo.path);
      blogs.photo.contentType = photo.type;
    }
    await blogs.save();
    res.status(201).send({
      success: true,
      message: "Blogs Created Successfully",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while post",
      error,
    });
  }
};

//get all post
export const getBlogRouter = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).select("-photo").limit(12).sort({createdAt:-1})
    res.status(200).send({
      success:true,
      countTotal: blogs.length,
      message:'All Blog',
      blogs
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message : 'Error in getting Blog',
      error
    })
  }
};

//get Single Blog 
// export const getSingleBlogRouter = async (req, res) => {
//   try {
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message : 'Error in getting single Blog',
//       error
//     })
//   }
// }

//get photo
export const blogPhotoController = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.pid).select("photo")
    if (blog.photo.data) {
      res.set('Content-type', blog.photo.contentType)
      return res.status(200).send(blog.photo.data)
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message : 'Error in getting Photo',
      error
    })
  }
}
