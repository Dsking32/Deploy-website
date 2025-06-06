const { validationResult } = require('express-validator');
const Application = require('../models/Application');
const fs = require('fs').promises;

const submitApplication = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Delete uploaded file if validation fails
      if (req.file) {
        await fs.unlink(req.file.path).catch(console.error);
      }
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'CV file is required'
      });
    }

    const { firstName, surname, phone, email, address, stateOfResidence, role } = req.body;

    // Check if application with this email already exists
    const existingApplication = await Application.findOne({ email });
    if (existingApplication) {
      await fs.unlink(req.file.path).catch(console.error);
      return res.status(400).json({
        success: false,
        message: 'Application with this email already exists'
      });
    }

    // Create new application
    const application = new Application({
      firstName,
      surname,
      phone,
      email,
      address,
      stateOfResidence,
      role,
      cv: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path
      }
    });

    await application.save();

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: {
        applicationId: application._id,
        submittedAt: application.createdAt
      }
    });
  } catch (error) {
    // Clean up uploaded file on error
    if (req.file) {
      await fs.unlink(req.file.path).catch(console.error);
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};



const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications',
      error: error.message
    });
  }
};

module.exports = { submitApplication, getAllApplications };


module.exports = { submitApplication };