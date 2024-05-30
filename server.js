const express = require('express')
const cors = require('cors')
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const profileRouter = require('./routes/profileRouter');
const db = require('./models');
const waterintakeRouter = require('./routes/waterintakeRouter');

const app = express()

// Tambahkan ini untuk mengurai JSON dari body request
app.use(express.json());

app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)
app.use('/api/profile', profileRouter)
app.use('/api/water-intake', waterintakeRouter); 

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


