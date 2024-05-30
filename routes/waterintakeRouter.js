const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');
const waterIntakeController = require('../controllers/waterIntakeController');

router.post('/profiles', profileController.importProfile);
router.put('/profiles/:id', profileController.updateProfile);
router.get('/profiles/:id', profileController.getProfile);
router.post('/profiles/:id/water-intake', waterIntakeController.addWaterIntake);

module.exports = router;
