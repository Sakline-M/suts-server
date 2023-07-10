import mongoose from "mongoose";



const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connection done with ${connect.connection.host}`.bgBlue.white);
    } catch (error) {
        console.log(`Error in Connection`);
    }
}

export default connectDB