const BusinessEnquiry = require('../models/BusinessEnquiry');
const FranchiseApplication = require('../models/FranchiseApplication');
const ContactMessage = require('../models/ContactMessage');
const Resource = require('../models/Resource');
const SuccessStory = require('../models/SuccessStory');
const SiteContent = require('../models/SiteContent');
const emailService = require('../services/emailService');
const { sendSuccess, sendError } = require('../utils/apiResponse');

/**
 * @desc    Create Business Owner Enquiry
 * @route   POST /api/business-enquiries
 * @access  Public
 */
const createBusinessEnquiry = async (req, res, next) => {
  try {
    const {
      name,
      businessName,
      phone,
      email,
      district,
      businessCategory,
      currentDigitalPresence,
      mainChallenge,
      preferredContactTime,
    } = req.body;

    // 1. Save data to MongoDB first
    const enquiry = await BusinessEnquiry.create({
      name,
      businessName,
      phone,
      email,
      district,
      businessCategory,
      currentDigitalPresence: currentDigitalPresence || '',
      mainChallenge: mainChallenge || '',
      preferredContactTime: preferredContactTime || 'Anytime',
    });

    // 2. Trigger asynchronous email notification (non-blocking for DB save)
    emailService.sendBusinessEnquiryNotification(enquiry).catch((err) => {
      console.error('[Notification Error] Business enquiry email notification failed:', err.message);
    });

    // 3. Return success response
    return sendSuccess(res, 201, 'Business enquiry submitted successfully', enquiry);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create Franchise Application
 * @route   POST /api/franchise-applications
 * @access  Public
 */
const createFranchiseApplication = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      email,
      district,
      currentOccupation,
      relevantExperience,
      reasonForInterest,
      preferredContactMethod,
    } = req.body;

    // 1. Save data to MongoDB first
    const application = await FranchiseApplication.create({
      name,
      phone,
      email,
      district,
      currentOccupation,
      relevantExperience: relevantExperience || '',
      reasonForInterest,
      preferredContactMethod: preferredContactMethod || 'Phone',
    });

    // 2. Trigger asynchronous email notification
    emailService.sendFranchiseApplicationNotification(application).catch((err) => {
      console.error('[Notification Error] Franchise app email notification failed:', err.message);
    });

    // 3. Return success response
    return sendSuccess(res, 201, 'Franchise application submitted successfully', application);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create Contact Message
 * @route   POST /api/contact
 * @access  Public
 */
const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 1. Save data to MongoDB first
    const contactMsg = await ContactMessage.create({
      name,
      email,
      phone: phone || '',
      subject,
      message,
    });

    // 2. Trigger asynchronous email notification
    emailService.sendContactMessageNotification(contactMsg).catch((err) => {
      console.error('[Notification Error] Contact message email notification failed:', err.message);
    });

    // 3. Return success response
    return sendSuccess(res, 201, 'Contact message sent successfully', contactMsg);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Published Resources
 * @route   GET /api/resources
 * @access  Public
 */
const getResources = async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = { published: true };

    if (category) {
      filter.category = category;
    }

    const resources = await Resource.find(filter).sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'Published resources retrieved successfully', resources);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Single Resource by Slug
 * @route   GET /api/resources/:slug
 * @access  Public
 */
const getResourceBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const resource = await Resource.findOne({ slug: slug.toLowerCase(), published: true });

    if (!resource) {
      return sendError(res, 404, `Resource not found with slug '${slug}'`);
    }

    return sendSuccess(res, 200, 'Resource retrieved successfully', resource);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Published Success Stories
 * @route   GET /api/success-stories
 * @access  Public
 */
const getSuccessStories = async (req, res, next) => {
  try {
    const stories = await SuccessStory.find({ published: true }).sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'Success stories retrieved successfully', stories);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Public Editable Site Content
 * @route   GET /api/site-content
 * @access  Public
 */
const getSiteContent = async (req, res, next) => {
  try {
    const { section } = req.query;
    const filter = {};

    if (section) {
      filter.section = section;
    }

    const contentList = await SiteContent.find(filter).sort({ section: 1, key: 1 });

    // Transform array into section-keyed dictionary structure for frontend convenience if requested
    const formattedContent = contentList.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = {};
      }
      acc[item.section][item.key] = item.value;
      return acc;
    }, {});

    return sendSuccess(res, 200, 'Site content retrieved successfully', {
      raw: contentList,
      formatted: formattedContent,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBusinessEnquiry,
  createFranchiseApplication,
  createContactMessage,
  getResources,
  getResourceBySlug,
  getSuccessStories,
  getSiteContent,
};
