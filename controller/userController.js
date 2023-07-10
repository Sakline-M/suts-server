import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";

//register router
export const registerRouter = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name) {
      return res.send({ message: "name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }

    //user check
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Registered",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //user save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "user Registation successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messasge: "Registation Fail",
      error,
    });
  }
};

//login router
export const loginRouter = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Set email or password first",
      });
    }
    //email check
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    //password match
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "password is not matched",
      });
    }

    //token create
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
        success :true,
        message : 'Login Successful',
        user:{
            name : user.name,
            email : user.email
        },
        token
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to login",
      error,
    });
  }
};
