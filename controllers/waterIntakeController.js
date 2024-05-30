const db = require('../models');
const Profile = db.profile;
const WaterIntake = db.WaterIntake;
const { validationResult } = require('express-validator');

const addWaterIntake = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { amount, date } = req.body;

  try {
    // Find the profile
    let profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Create a new water intake record
    let waterIntake = await WaterIntake.create({
      amount,
      date,
      profileId: profile.id
    });

    // Return the new water intake record
    res.status(201).json({ message: 'Water intake added successfully', waterIntake });
  } catch (error) {
    res.status(500).json({ message: 'Error adding water intake', error: error.message });
  }
};

module.exports = {
  addWaterIntake
};
