const { body } = require('express-validator');

const validateCreateSiteContent = [
  body('section')
    .trim()
    .notEmpty()
    .withMessage('Section is required'),
  body('key')
    .trim()
    .notEmpty()
    .withMessage('Key is required'),
  body('value')
    .exists()
    .withMessage('Value is required'),
  body('type')
    .optional()
    .isIn(['text', 'html', 'image', 'json', 'array', 'boolean', 'number'])
    .withMessage('Invalid content type'),
];

const validateUpdateSiteContent = [
  body('section')
    .optional()
    .trim()
    .notEmpty(),
  body('key')
    .optional()
    .trim()
    .notEmpty(),
  body('value')
    .optional()
    .exists(),
  body('type')
    .optional()
    .isIn(['text', 'html', 'image', 'json', 'array', 'boolean', 'number'])
    .withMessage('Invalid content type'),
];

module.exports = {
  validateCreateSiteContent,
  validateUpdateSiteContent,
};
