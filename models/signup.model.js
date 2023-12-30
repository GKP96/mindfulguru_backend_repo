const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: true,
  },
  howDidYouHear: {
    type: [String],
    enum: ["LinkedIn", "Friends", "JobPortal", "Others"],
  },
  city: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  state: {
    type: String,
    required: true,
  },
});

const SignUpModel = mongoose.model("SignUp", signUpSchema);

module.exports = SignUpModel;
