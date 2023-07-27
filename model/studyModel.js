import mongoose from "mongoose";

const studySchema = new mongoose.Schema({
  email: {
    type: String,
  },
  studies : {
    type: Array,
    message: ["error in studies"],
  },
});

const Studies = mongoose.model("studies", studySchema);

export default Studies;