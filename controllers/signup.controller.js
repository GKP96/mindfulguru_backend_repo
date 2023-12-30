const signUpService = require("../services/signup.service");
const SignUpModal = require("../models/signup.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/env/dev");
const createSignUp = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    data.password = bcryptjs.hashSync(data.password, 10);
    const createdSignUp = await signUpService.create(data);
    res.status(200).json({
      success: true,
      message: "signUp successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllSignUps = async (req, res) => {
  try {
    const signUps = await signUpService.find();
    res.status(200).json(signUps);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSignUpByemail = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);
    const signUp = await SignUpModal.findOne({ email: email });
    console.log(signUp);
    if (signUp) {
      res.status(200).json(signUp);
    } else {
      res.json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateSignUpByemail = async (req, res) => {
  try {
    const { email } = req.params;
    const updatedData = req.body;
    const updatedSignUp = await signUpService.findOneAndUpdate(
      email,
      updatedData
    );
    if (updatedSignUp) {
      res.status(200).json(updatedSignUp);
    } else {
      res.json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteSignUpByemail = async (req, res) => {
  try {
    const { email } = req.params;
    const deletedSignUp = await signUpService.remove(email);
    if (deletedSignUp) {
      res.status(204).send();
    } else {
      res.json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const loginDetails = await signUpService.findOne(email, password);
    if (!loginDetails) {
      res.status(400).json({
        success: false,
        message: "wrong credentials",
      });
    } else {
      let userID = loginDetails._id.toString();
      console.log(userID);
      const token = jwt.sign({ _id: userID }, SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json({
        success: true,
        message: loginDetails,
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      messagge: "Internal server error ",
    });
  }
};
module.exports = {
  createSignUp,
  getAllSignUps,
  getSignUpByemail,
  updateSignUpByemail,
  deleteSignUpByemail,
  login,
};
