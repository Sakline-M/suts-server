import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRoute from'./routes/userRoutes.js'
import connectDB from './config/mongoDB.js'

//config dotenv
dotenv.config()
const PORT = process.env.PORT || 4040

//init express
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user', userRoute)


//server run
connectDB()
app.listen(PORT, () => {
    console.log(`The Server is running on ${PORT}`.bgGreen);
})