const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signup.controller");

router.post("/", signUpController.createSignUp);
router.get("/:email", signUpController.getSignUpByemail);

router.get("/", signUpController.getAllSignUps);

router.put("/:email", signUpController.updateSignUpByemail);

router.delete("/:email", signUpController.deleteSignUpByemail);
router.post("/login",signUpController.login);

module.exports = router;
