const { body } = require('express-validator');

const validateCreateFranchiseApp = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .escape(),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('district')
    .trim()
    .notEmpty()
    .withMessage('District is required')
    .escape(),
  body('currentOccupation')
    .trim()
    .notEmpty()
    .withMessage('Current occupation is required')
    .escape(),
  body('relevantExperience')
    .optional()
    .trim()
    .escape(),
  body('reasonForInterest')
    .trim()
    .notEmpty()
    .withMessage('Reason for interest is required')
    .escape(),
  body('preferredContactMethod')
    .optional()
    .trim()
    .escape(),
];

const validateUpdateFranchiseStatus = [
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['New', 'Contacted', 'Qualified', 'Converted', 'Closed'])
    .withMessage('Invalid status value. Allowed: New, Contacted, Qualified, Converted, Closed'),
];

module.exports = {
  validateCreateFranchiseApp,
  validateUpdateFranchiseStatus,
};
