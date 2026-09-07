const { body } = require('express-validator');

const validateCreateResource = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required'),
  body('slug')
    .optional()
    .trim()
    .toLowerCase(),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required'),
  body('content')
    .notEmpty()
    .withMessage('Content is required'),
  body('image')
    .optional()
    .trim(),
  body('category')
    .trim()
    .notEmpty()
    .withMessage('Category is required'),
  body('published')
    .optional()
    .isBoolean()
    .withMessage('Published must be a boolean value'),
];

const validateUpdateResource = [
  body('title')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Title cannot be empty'),
  body('slug')
    .optional()
    .trim()
    .toLowerCase(),
  body('description')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Description cannot be empty'),
  body('content')
    .optional()
    .notEmpty()
    .withMessage('Content cannot be empty'),
  body('image')
    .optional()
    .trim(),
  body('category')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Category cannot be empty'),
  body('published')
    .optional()
    .isBoolean()
    .withMessage('Published must be a boolean value'),
];

module.exports = {
  validateCreateResource,
  validateUpdateResource,
};
