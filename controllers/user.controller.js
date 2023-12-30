// user.controller.js

const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await userService.findOne(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const updatedUser = await userService.findOneAndUpdate(email, req.body);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const deletedUser = await userService.remove(email);
    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
};
