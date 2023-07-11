import Course from "../model/courseModel.js";

// get all course
export const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find({});
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
