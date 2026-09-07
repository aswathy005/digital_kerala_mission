const BusinessEnquiry = require('../models/BusinessEnquiry');
const FranchiseApplication = require('../models/FranchiseApplication');
const ContactMessage = require('../models/ContactMessage');
const Resource = require('../models/Resource');
const SuccessStory = require('../models/SuccessStory');
const SiteContent = require('../models/SiteContent');
const { sendSuccess, sendError } = require('../utils/apiResponse');
const slugify = require('../utils/slugify');

// ============================================================================
// DASHBOARD STATS
// ============================================================================

/**
 * @desc    Get Admin Dashboard Overview & Metrics
 * @route   GET /api/admin/dashboard
 * @access  Private (Admin)
 */
const getDashboardStats = async (req, res, next) => {
  try {
    const [
      totalBusinessEnquiries,
      totalFranchiseApplications,
      totalContactMessages,
      totalResources,
      totalSuccessStories,
      recentEnquiries,
      recentFranchiseApplications,
      recentMessages,
    ] = await Promise.all([
      BusinessEnquiry.countDocuments(),
      FranchiseApplication.countDocuments(),
      ContactMessage.countDocuments(),
      Resource.countDocuments(),
      SuccessStory.countDocuments(),
      BusinessEnquiry.find().sort({ createdAt: -1 }).limit(5),
      FranchiseApplication.find().sort({ createdAt: -1 }).limit(5),
      ContactMessage.find().sort({ createdAt: -1 }).limit(5),
    ]);

    return sendSuccess(res, 200, 'Dashboard statistics retrieved successfully', {
      totalBusinessEnquiries,
      totalFranchiseApplications,
      totalContactMessages,
      totalResources,
      totalSuccessStories,
      recentEnquiries,
      recentFranchiseApplications,
      recentMessages,
    });
  } catch (error) {
    next(error);
  }
};

// ============================================================================
// BUSINESS ENQUIRIES ADMIN CONTROLLERS
// ============================================================================

const getAllBusinessEnquiries = async (req, res, next) => {
  try {
    const { status, district } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (district) filter.district = district;

    const enquiries = await BusinessEnquiry.find(filter).sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'Business enquiries retrieved successfully', enquiries);
  } catch (error) {
    next(error);
  }
};

const getBusinessEnquiryById = async (req, res, next) => {
  try {
    const enquiry = await BusinessEnquiry.findById(req.params.id);
    if (!enquiry) {
      return sendError(res, 404, 'Business enquiry not found');
    }
    return sendSuccess(res, 200, 'Business enquiry retrieved successfully', enquiry);
  } catch (error) {
    next(error);
  }
};

const updateBusinessEnquiryStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const enquiry = await BusinessEnquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return sendError(res, 404, 'Business enquiry not found');
    }

    return sendSuccess(res, 200, 'Business enquiry status updated successfully', enquiry);
  } catch (error) {
    next(error);
  }
};

const deleteBusinessEnquiry = async (req, res, next) => {
  try {
    const enquiry = await BusinessEnquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return sendError(res, 404, 'Business enquiry not found');
    }
    return sendSuccess(res, 200, 'Business enquiry deleted successfully');
  } catch (error) {
    next(error);
  }
};

// ============================================================================
// FRANCHISE APPLICATIONS ADMIN CONTROLLERS
// ============================================================================

const getAllFranchiseApps = async (req, res, next) => {
  try {
    const { status, district } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (district) filter.district = district;

    const applications = await FranchiseApplication.find(filter).sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'Franchise applications retrieved successfully', applications);
  } catch (error) {
    next(error);
  }
};

const getFranchiseAppById = async (req, res, next) => {
  try {
    const application = await FranchiseApplication.findById(req.params.id);
    if (!application) {
      return sendError(res, 404, 'Franchise application not found');
    }
    return sendSuccess(res, 200, 'Franchise application retrieved successfully', application);
  } catch (error) {
    next(error);
  }
};

const updateFranchiseAppStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const application = await FranchiseApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!application) {
      return sendError(res, 404, 'Franchise application not found');
    }

    return sendSuccess(res, 200, 'Franchise application status updated successfully', application);
  } catch (error) {
    next(error);
  }
};

const deleteFranchiseApp = async (req, res, next) => {
  try {
    const application = await FranchiseApplication.findByIdAndDelete(req.params.id);
    if (!application) {
      return sendError(res, 404, 'Franchise application not found');
    }
    return sendSuccess(res, 200, 'Franchise application deleted successfully');
  } catch (error) {
    next(error);
  }
};

// ============================================================================
// CONTACT MESSAGES ADMIN CONTROLLERS
// ============================================================================

const getAllContactMessages = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const messages = await ContactMessage.find(filter).sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'Contact messages retrieved successfully', messages);
  } catch (error) {
    next(error);
  }
};

const getContactMessageById = async (req, res, next) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) {
      return sendError(res, 404, 'Contact message not found');
    }
    return sendSuccess(res, 200, 'Contact message retrieved successfully', message);
  } catch (error) {
    next(error);
  }
};

const updateContactMessageStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!message) {
      return sendError(res, 404, 'Contact message not found');
    }

    return sendSuccess(res, 200, 'Contact message status updated successfully', message);
  } catch (error) {
    next(error);
  }
};

const deleteContactMessage = async (req, res, next) => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!message) {
      return sendError(res, 404, 'Contact message not found');
    }
    return sendSuccess(res, 200, 'Contact message deleted successfully');
  } catch (error) {
    next(error);
  }
};

// ============================================================================
// RESOURCE CRUD CONTROLLERS
// ============================================================================

const getAllResourcesAdmin = async (req, res, next) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'All resources retrieved successfully', resources);
  } catch (error) {
    next(error);
  }
};

const createResource = async (req, res, next) => {
  try {
    const { title, slug, description, content, image, category, published } = req.body;
    const generatedSlug = slug ? slugify(slug) : slugify(title);

    const existingSlug = await Resource.findOne({ slug: generatedSlug });
    if (existingSlug) {
      return sendError(res, 400, `Resource with slug '${generatedSlug}' already exists`);
    }

    const resource = await Resource.create({
      title,
      slug: generatedSlug,
      description,
      content,
      image: image || '',
      category,
      published: published !== undefined ? published : true,
    });

    return sendSuccess(res, 201, 'Resource created successfully', resource);
  } catch (error) {
    next(error);
  }
};

const getResourceById = async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return sendError(res, 404, 'Resource not found');
    }
    return sendSuccess(res, 200, 'Resource retrieved successfully', resource);
  } catch (error) {
    next(error);
  }
};

const updateResource = async (req, res, next) => {
  try {
    const { title, slug, description, content, image, category, published } = req.body;
    const updateFields = {};

    if (title !== undefined) updateFields.title = title;
    if (description !== undefined) updateFields.description = description;
    if (content !== undefined) updateFields.content = content;
    if (image !== undefined) updateFields.image = image;
    if (category !== undefined) updateFields.category = category;
    if (published !== undefined) updateFields.published = published;

    if (slug || title) {
      const newSlug = slugify(slug || title);
      const existing = await Resource.findOne({ slug: newSlug, _id: { $ne: req.params.id } });
      if (existing) {
        return sendError(res, 400, `Resource with slug '${newSlug}' already exists`);
      }
      updateFields.slug = newSlug;
    }

    const resource = await Resource.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!resource) {
      return sendError(res, 404, 'Resource not found');
    }

    return sendSuccess(res, 200, 'Resource updated successfully', resource);
  } catch (error) {
    next(error);
  }
};

const deleteResource = async (req, res, next) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return sendError(res, 404, 'Resource not found');
    }
    return sendSuccess(res, 200, 'Resource deleted successfully');
  } catch (error) {
    next(error);
  }
};

// ============================================================================
// SUCCESS STORIES CRUD CONTROLLERS
// ============================================================================

const getAllSuccessStoriesAdmin = async (req, res, next) => {
  try {
    const stories = await SuccessStory.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'All success stories retrieved successfully', stories);
  } catch (error) {
    next(error);
  }
};

const createSuccessStory = async (req, res, next) => {
  try {
    const { name, businessName, location, testimonial, image, published } = req.body;

    const story = await SuccessStory.create({
      name,
      businessName,
      location,
      testimonial,
      image: image || '',
      published: published !== undefined ? published : true,
    });

    return sendSuccess(res, 201, 'Success story created successfully', story);
  } catch (error) {
    next(error);
  }
};

const getSuccessStoryById = async (req, res, next) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return sendError(res, 404, 'Success story not found');
    }
    return sendSuccess(res, 200, 'Success story retrieved successfully', story);
  } catch (error) {
    next(error);
  }
};

const updateSuccessStory = async (req, res, next) => {
  try {
    const story = await SuccessStory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!story) {
      return sendError(res, 404, 'Success story not found');
    }

    return sendSuccess(res, 200, 'Success story updated successfully', story);
  } catch (error) {
    next(error);
  }
};

const deleteSuccessStory = async (req, res, next) => {
  try {
    const story = await SuccessStory.findByIdAndDelete(req.params.id);
    if (!story) {
      return sendError(res, 404, 'Success story not found');
    }
    return sendSuccess(res, 200, 'Success story deleted successfully');
  } catch (error) {
    next(error);
  }
};

// ============================================================================
// SITE CONTENT CRUD CONTROLLERS
// ============================================================================

const getAllSiteContentAdmin = async (req, res, next) => {
  try {
    const content = await SiteContent.find().sort({ section: 1, key: 1 });
    return sendSuccess(res, 200, 'All site content retrieved successfully', content);
  } catch (error) {
    next(error);
  }
};

const createSiteContent = async (req, res, next) => {
  try {
    const { section, key, value, type } = req.body;

    const existing = await SiteContent.findOne({ section, key });
    if (existing) {
      return sendError(
        res,
        400,
        `Site content key '${key}' already exists under section '${section}'`
      );
    }

    const contentItem = await SiteContent.create({
      section,
      key,
      value,
      type: type || 'text',
    });

    return sendSuccess(res, 201, 'Site content created successfully', contentItem);
  } catch (error) {
    next(error);
  }
};

const updateSiteContent = async (req, res, next) => {
  try {
    const { section, key, value, type } = req.body;

    if (section && key) {
      const existing = await SiteContent.findOne({
        section,
        key,
        _id: { $ne: req.params.id },
      });

      if (existing) {
        return sendError(
          res,
          400,
          `Site content key '${key}' already exists under section '${section}'`
        );
      }
    }

    const contentItem = await SiteContent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!contentItem) {
      return sendError(res, 404, 'Site content not found');
    }

    return sendSuccess(res, 200, 'Site content updated successfully', contentItem);
  } catch (error) {
    next(error);
  }
};

const deleteSiteContent = async (req, res, next) => {
  try {
    const contentItem = await SiteContent.findByIdAndDelete(req.params.id);
    if (!contentItem) {
      return sendError(res, 404, 'Site content not found');
    }
    return sendSuccess(res, 200, 'Site content deleted successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardStats,
  // Business enquiries
  getAllBusinessEnquiries,
  getBusinessEnquiryById,
  updateBusinessEnquiryStatus,
  deleteBusinessEnquiry,
  // Franchise apps
  getAllFranchiseApps,
  getFranchiseAppById,
  updateFranchiseAppStatus,
  deleteFranchiseApp,
  // Contact messages
  getAllContactMessages,
  getContactMessageById,
  updateContactMessageStatus,
  deleteContactMessage,
  // Resource CRUD
  getAllResourcesAdmin,
  createResource,
  getResourceById,
  updateResource,
  deleteResource,
  // Success story CRUD
  getAllSuccessStoriesAdmin,
  createSuccessStory,
  getSuccessStoryById,
  updateSuccessStory,
  deleteSuccessStory,
  // Site content CRUD
  getAllSiteContentAdmin,
  createSiteContent,
  updateSiteContent,
  deleteSiteContent,
};
