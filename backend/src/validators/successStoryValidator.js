const { body } = require('express-validator');

const validateCreateSuccessStory = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  body('businessName')
    .trim()
    .notEmpty()
    .withMessage('Business name is required'),
  body('location')
    .trim()
    .notEmpty()
    .withMessage('Location is required'),
  body('testimonial')
    .trim()
    .notEmpty()
    .withMessage('Testimonial is required'),
  body('image')
    .optional()
    .trim(),
  body('published')
    .optional()
    .isBoolean()
    .withMessage('Published must be a boolean value'),
];

const validateUpdateSuccessStory = [
  body('name')
    .optional()
    .trim()
    .notEmpty(),
  body('businessName')
    .optional()
    .trim()
    .notEmpty(),
  body('location')
    .optional()
    .trim()
    .notEmpty(),
  body('testimonial')
    .optional()
    .trim()
    .notEmpty(),
  body('image')
    .optional()
    .trim(),
  body('published')
    .optional()
    .isBoolean(),
];

module.exports = {
  validateCreateSuccessStory,
  validateUpdateSuccessStory,
};
