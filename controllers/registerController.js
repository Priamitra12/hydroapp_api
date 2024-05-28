const db = require('../models');
const bcrypt = require('bcryptjs');
const User = db.users;
const { validationResult } = require('express-validator');
const { UniqueConstraintError } = require('sequelize');

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { username, email, password } = req.body;
    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Membuat user baru dengan password yang sudah di-hash
        let newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Menghapus password dari output
        newUser = newUser.get({ plain: true });
        delete newUser.password;

        res.status(201).send({ message: "User registered successfully", user: newUser });
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            return res.status(409).json({ message: "Email sudah digunakan. Silakan gunakan email lain." });
        }
        res.status(500).send({ message: "Error registering user", error: error.message });
    }
}

module.exports = {
    registerUser
}

