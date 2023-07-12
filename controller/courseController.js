import Course from "../model/courseModel.js";

// get all course
export const getAllCourse = async (req, res) => {
  try {
    // calculate sort
    let sort = "";
    if (req.query.sort === "priceLTH") {
      sort = { price: 1 };
    }
    if (req.query.sort === "priceHTL") {
      sort = { price: -1 };
    }
    if (req.query.sort === "name") {
      sort = { name: 1 };
    }
    // calculate category
    

    const courses = await Course.find({}).sort(sort);
    res.send(courses);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messasge: " can't get the course data",
      error: error,
    });
  }
};
