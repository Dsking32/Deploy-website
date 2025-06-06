const Application = require('../models/Application');
const fs = require('fs'); // ✅ for existsSync
const fsp = require('fs').promises; // ✅ for async operations like unlink
const path = require('path');


const getAllApplications = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const applications = await Application.find()
      .select('-cv.path') // Don't expose file paths
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Application.countDocuments();

    res.json({
      success: true,
      data: {
        applications,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Don't expose file path in response
    const applicationData = application.toObject();
    delete applicationData.cv.path;

    res.json({
      success: true,
      data: applicationData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Delete the CV file
    try {
      await fsp.unlink(application.cv.path); // ✅ uses the promises API correctly

    } catch (fileError) {
      console.error('Error deleting file:', fileError);
    }

    // Delete the application
    await Application.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Application deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const downloadCV = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application || !application.cv || !application.cv.filename) {
      return res.status(404).json({
        success: false,
        message: 'CV not found',
      });
    }

    const filePath = path.join(__dirname, '..', 'uploads', application.cv.filename);

    if (!fs.existsSync(filePath)) {
  return res.status(404).json({
    success: false,
    message: 'File does not exist on server',
  });
}

res.download(filePath, application.cv.originalName);
  } catch (error) {
    console.error('Error downloading CV:', error);
    res.status(500).json({
      success: false,
      message: 'Error downloading CV',
      error: error.message,
    });
  }
};

module.exports = {
  getAllApplications,
  getApplicationById,
  deleteApplication,
  downloadCV, // ✅ Make sure this is included
};
