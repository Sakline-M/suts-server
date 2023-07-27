import Course from "../model/courseModel.js";
import Studies from "../model/studyModel.js";

export const getAllStduy = async (req, res) => {
  try {
    // get user email
    const email = req.query.email;

    // query
    const query = { email: email };

    // send res
    const result = await Studies.find(query);
    res.send(result);
  } catch (error) {
    res.status(500).send({
      success: false,
      messasge: "Order Fail",
      error,
    });
  }
};

export const postAStudy = async (req, res) => {
  try {
    // send res
    const study = Studies(req.body);
    const result = study.save();

    res.status(200).send({
      success: true,
      messasge: "study post to database",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      messasge: "Order Fail",
      error,
    });
  }
};
