import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoute from "./routes/userRoutes.js";
import connectDB from "./config/mongoDB.js";
import courseRoute from "./routes/courseRoute.js";
import blogRoute from "./routes/blogRoutes.js";

//config dotenv
dotenv.config();
const PORT = process.env.PORT || 4040;

//init express
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/blog", blogRoute);

// homepage
app.get("/", (req, res) => {
  res.send(`<h1>Wellcome to S.U.T.S server</h1>`);
});

//server run
connectDB();
app.listen(PORT, () => {
  console.log(`The Server is running on ${PORT}`.bgGreen);
});
