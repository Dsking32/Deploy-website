const express = require('express');
const { body } = require('express-validator');
const upload = require('../middleware/upload');
const { submitApplication } = require('../controllers/applicationController');
const { getAllApplications, downloadCV } = require('../controllers/adminController'); // ✅ FIXED


const router = express.Router();

// Validation rules
const applicationValidation = [
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  body('surname')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Surname must be between 2 and 50 characters'),
  body('phone')
    .matches(/^\+?[\d\s\-\(\)]+$/)
    .withMessage('Please enter a valid phone number'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email'),
  body('address')
    .trim()
    .isLength({ min: 10, max: 200 })
    .withMessage('Address must be between 10 and 200 characters'),
  body('stateOfResidence')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('State of residence must be between 2 and 50 characters'),
    body('role')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Role must be between 2 and 100 characters')
];

// ✅ Get all applications
router.get('/', getAllApplications);

// ✅ Submit application with file upload
router.post('/submit', upload.single('cv'), applicationValidation, submitApplication);

// ✅ Download CV by applicant ID
router.get('/download-cv/:id', downloadCV);

module.exports = router;
