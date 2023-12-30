// signup.service.js

const SignUpModal = require("../models/signup.model");

const create = async (data) => {
  return await SignUpModal.create(data);
};

const find = async () => {
  return await SignUpModal.find();
};

const findOne = async (email) => {
  return await SignUpModal.findOne({ email });
};

const findOneAndUpdate = async (email, data) => {
  return await SignUpModal.findOneAndUpdate({ email }, data, { new: true });
};

const remove = async (email) => {
  return await SignUpModal.deleteOne({ email });
};

module.exports = {
  create,
  find,
  findOne,
  findOneAndUpdate,
  remove,
};
