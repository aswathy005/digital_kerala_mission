const express = require('express');
const router = express.Router();
const {
  createBusinessEnquiry,
  createFranchiseApplication,
  createContactMessage,
  getResources,
  getResourceBySlug,
  getSuccessStories,
  getSiteContent,
} = require('../controllers/publicController');

const { validateCreateEnquiry } = require('../validators/enquiryValidator');
const { validateCreateFranchiseApp } = require('../validators/franchiseValidator');
const { validateCreateContactMessage } = require('../validators/messageValidator');
const validate = require('../middleware/validate');
const { submissionLimiter } = require('../middleware/rateLimiter');

// Public Form Submission Endpoints
router.post(
  '/business-enquiries',
  submissionLimiter,
  validateCreateEnquiry,
  validate,
  createBusinessEnquiry
);

router.post(
  '/franchise-applications',
  submissionLimiter,
  validateCreateFranchiseApp,
  validate,
  createFranchiseApplication
);

router.post(
  '/contact',
  submissionLimiter,
  validateCreateContactMessage,
  validate,
  createContactMessage
);

// Public Content Read Endpoints
router.get('/resources', getResources);
router.get('/resources/:slug', getResourceBySlug);
router.get('/success-stories', getSuccessStories);
router.get('/testimonials', getSuccessStories);
router.get('/site-content', getSiteContent);

module.exports = router;
