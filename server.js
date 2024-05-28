const express = require('express')
const cors = require('cors')
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const db = require('./models');

const app = express()

// Tambahkan ini untuk mengurai JSON dari body request
app.use(express.json());

app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await db.sequelize.sync({ alter: true });
        console.log("Drop and re-sync db.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

