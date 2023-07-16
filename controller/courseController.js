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
    let category = {};
    if (req.query.category != "All") {
      category = req.query.category;
    }
    // calculate hightest and lowest
    let price = { $gt: req.query.gt, $lt: req.query.lt };

    // calculate query
    let query = {};
    if (req.query.category === "All") {
      query = { price };
    }
    if (req.query.category != "All") {
      category = req.query.category;
      query = { category, price };
    }

    // calculate pagenation
    let skip = 0;
    let limit = 15;
    if (req.query.category === "All") {
      const page = req.query.page;
      const limit = req.query.limit;
      skip = (page - 1) * parseInt(limit);
    }

    // query
    const courses = await Course.find(query).sort(sort).skip(skip).limit(limit);

    // send to client
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

export const getSingleCourseData = async (req, res) => {
  try {
    const id = req.params.id;
    const course =await Course.findById(id);
    res.send(course);
  } catch (error) {}
};
