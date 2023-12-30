// signup.service.js

const UserModal = require("../models/user.model");

const create = async (data) => {
  return await UserModal.create(data);
};

const find = async () => {
  return await UserModal.find();
};

const findOne = async (email) => {
  return await UserModal.findOne({ email });
};

const findOneAndUpdate = async (email, data) => {
  return await UserModal.findOneAndUpdate({ email }, data, { new: true });
};

const remove = async (email) => {
  return await UserModal.deleteOne({ email });
};

module.exports = {
  create,
  find,
  findOne,
  findOneAndUpdate,
  remove,
};
