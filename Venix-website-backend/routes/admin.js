const express = require('express');
const authMiddleware = require('../middleware/auth');
const {
  getAllApplications,
  getApplicationById,
  deleteApplication,
  downloadCV
} = require('../controllers/adminController');

const router = express.Router();

// All admin routes require authentication
router.use(authMiddleware);

// Routes
router.get('/applications', getAllApplications);
router.get('/applications/:id', getApplicationById);
router.delete('/applications/:id', deleteApplication);
router.get('/applications/:id/download-cv', downloadCV);



module.exports = router;