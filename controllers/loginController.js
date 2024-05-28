const db = require('../models');
const bcrypt = require('bcryptjs');
const User = db.users;

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid credentials" });
        }

        // Implementasi token atau sesi login di sini

        res.status(200).send({ message: "Login successful", user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).send({ message: "Error logging in", error: error.message });
    }
};

module.exports = {
    loginUser
};

