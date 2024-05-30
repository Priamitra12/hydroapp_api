const db = require('../models');
const Profile = db.profile;
const { validationResult } = require('express-validator');

const importProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, age, gender, height, weight } = req.body;

  try {
    let profile = await Profile.create({
      name,
      age,
      gender,
      height,
      weight
    });

    res.status(201).json({ message: 'Profile created successfully', profile });
  } catch (error) {
    res.status(500).json({ message: 'Error creating profile', error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { name, age, gender, height, weight } = req.body;

  try {
    // Find the profile to be updated
    let profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Update the profile
    profile.name = name;
    profile.age = age;
    profile.gender = gender;
    profile.height = height;
    profile.weight = weight;

    await profile.save();

    // Return the updated profile
    res.status(200).json({ message: 'Profile updated successfully', profile });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
};

const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the profile with water intake records
    let profile = await Profile.findByPk(id, {
      include: {
        model: db.WaterIntake,
        as: 'waterIntakes'
      }
    });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Return the profile with water intake records
    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

module.exports = {
  importProfile,
  updateProfile,
  getProfile
};
