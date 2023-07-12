import mongoose from "mongoose";


const blogSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  }
},
{ timestamps: true })

  export default mongoose.model('blogs', blogSchema)