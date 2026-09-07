const express = require('express');
const router = express.Router();
const { protectAdmin } = require('../middleware/auth');
const validate = require('../middleware/validate');
const validateObjectId = require('../middleware/validateObjectId');

const {
  getDashboardStats,
  // Business Enquiries
  getAllBusinessEnquiries,
  getBusinessEnquiryById,
  updateBusinessEnquiryStatus,
  deleteBusinessEnquiry,
  // Franchise Applications
  getAllFranchiseApps,
  getFranchiseAppById,
  updateFranchiseAppStatus,
  deleteFranchiseApp,
  // Contact Messages
  getAllContactMessages,
  getContactMessageById,
  updateContactMessageStatus,
  deleteContactMessage,
  // Resources
  getAllResourcesAdmin,
  createResource,
  getResourceById,
  updateResource,
  deleteResource,
  // Success Stories
  getAllSuccessStoriesAdmin,
  createSuccessStory,
  getSuccessStoryById,
  updateSuccessStory,
  deleteSuccessStory,
  // Site Content
  getAllSiteContentAdmin,
  createSiteContent,
  updateSiteContent,
  deleteSiteContent,
} = require('../controllers/adminController');

const { validateUpdateEnquiryStatus } = require('../validators/enquiryValidator');
const { validateUpdateFranchiseStatus } = require('../validators/franchiseValidator');
const { validateUpdateMessageStatus } = require('../validators/messageValidator');
const { validateCreateResource, validateUpdateResource } = require('../validators/resourceValidator');
const { validateCreateSuccessStory, validateUpdateSuccessStory } = require('../validators/successStoryValidator');
const { validateCreateSiteContent, validateUpdateSiteContent } = require('../validators/siteContentValidator');

// Apply JWT Admin Protection Middleware to ALL Admin Routes
router.use(protectAdmin);

// Dashboard Route
router.get('/dashboard', getDashboardStats);

// ----------------------------------------------------------------------------
// Admin Business Enquiry Routes
// ----------------------------------------------------------------------------
router.get('/business-enquiries', getAllBusinessEnquiries);
router.get('/business-enquiries/:id', validateObjectId('id'), getBusinessEnquiryById);
router.patch(
  '/business-enquiries/:id',
  validateObjectId('id'),
  validateUpdateEnquiryStatus,
  validate,
  updateBusinessEnquiryStatus
);
router.delete('/business-enquiries/:id', validateObjectId('id'), deleteBusinessEnquiry);

// ----------------------------------------------------------------------------
// Admin Franchise Application Routes
// ----------------------------------------------------------------------------
router.get('/franchise-applications', getAllFranchiseApps);
router.get('/franchise-applications/:id', validateObjectId('id'), getFranchiseAppById);
router.patch(
  '/franchise-applications/:id',
  validateObjectId('id'),
  validateUpdateFranchiseStatus,
  validate,
  updateFranchiseAppStatus
);
router.delete('/franchise-applications/:id', validateObjectId('id'), deleteFranchiseApp);

// ----------------------------------------------------------------------------
// Admin Contact Message Routes
// ----------------------------------------------------------------------------
router.get('/contact-messages', getAllContactMessages);
router.get('/contact-messages/:id', validateObjectId('id'), getContactMessageById);
router.patch(
  '/contact-messages/:id',
  validateObjectId('id'),
  validateUpdateMessageStatus,
  validate,
  updateContactMessageStatus
);
router.delete('/contact-messages/:id', validateObjectId('id'), deleteContactMessage);

// ----------------------------------------------------------------------------
// Admin Resource CRUD Routes
// ----------------------------------------------------------------------------
router.get('/resources', getAllResourcesAdmin);
router.post('/resources', validateCreateResource, validate, createResource);
router.get('/resources/:id', validateObjectId('id'), getResourceById);
router.put(
  '/resources/:id',
  validateObjectId('id'),
  validateUpdateResource,
  validate,
  updateResource
);
router.delete('/resources/:id', validateObjectId('id'), deleteResource);

// ----------------------------------------------------------------------------
// Admin Success Story CRUD Routes
// ----------------------------------------------------------------------------
router.get('/success-stories', getAllSuccessStoriesAdmin);
router.post('/success-stories', validateCreateSuccessStory, validate, createSuccessStory);
router.get('/success-stories/:id', validateObjectId('id'), getSuccessStoryById);
router.put(
  '/success-stories/:id',
  validateObjectId('id'),
  validateUpdateSuccessStory,
  validate,
  updateSuccessStory
);
router.delete('/success-stories/:id', validateObjectId('id'), deleteSuccessStory);

// ----------------------------------------------------------------------------
// Admin Site Content CRUD Routes
// ----------------------------------------------------------------------------
router.get('/site-content', getAllSiteContentAdmin);
router.post('/site-content', validateCreateSiteContent, validate, createSiteContent);
router.put(
  '/site-content/:id',
  validateObjectId('id'),
  validateUpdateSiteContent,
  validate,
  updateSiteContent
);
router.delete('/site-content/:id', validateObjectId('id'), deleteSiteContent);

module.exports = router;
