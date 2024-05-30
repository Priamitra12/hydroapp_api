const express = require('express');
const { body, validationResult } = require('express-validator');
const profileController = require('../controllers/profileController');
const waterIntakeController = require('../controllers/waterIntakeController');

const router = express.Router();

router.post('/', [
    body('name').notEmpty().withMessage('Nama wajib di isi'),
    body('age').notEmpty().withMessage('Umur wajib di isi'),
    body('gender').notEmpty().withMessage('Jenis Kelamin wajib di isi'),
    body('height').notEmpty().withMessage('Tingi Badan wajib di isi'),
    body('weight').notEmpty().withMessage('Berat Badan wajib di isi'),
], profileController.importProfile);

router.put('/profiles/:id', profileController.updateProfile);


router.post('/profiles', profileController.importProfile);
router.put('/profiles/:id', profileController.updateProfile);
router.get('/profiles/:id', profileController.getProfile);
router.post('/profiles/:id/water-intake', waterIntakeController.addWaterIntake);


module.exports = router;

