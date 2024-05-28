const express = require('express');
const { body, validationResult } = require('express-validator');
const registerController = require('../controllers/registerController');

const router = express.Router();

router.post('/', [
    body('username').isLength({ min: 5 }).withMessage('Username harus memiliki minimal 5 karakter'),
    body('email').isEmail().withMessage('Email tidak valid'),
    body('password').isLength({ min: 8 }).withMessage('Password harus memiliki minimal 8 karakter')
], registerController.registerUser);

module.exports = router;

