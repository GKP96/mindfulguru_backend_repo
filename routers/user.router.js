const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();


router.post('/', userController.createUser);

router.get('/', userController.getAllUsers);

router.get('/:email', userController.getUserByEmail);

router.put('/:email', userController.updateUserByEmail);

router.delete('/:email', userController.deleteUserByEmail);

module.exports = router;