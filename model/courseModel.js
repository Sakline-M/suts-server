import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  full_description: {
    type: String,
    required: true,
  },
  course_length: {
    type: Number,
    required: true,
  },
  course_time: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  test: {
    type: Number,
    required: true,
  },
  in_week: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  studying: {
    type : Boolean,
    required : true,
  }
});

const Course = mongoose.model('course', courseSchema);

export default Course;
