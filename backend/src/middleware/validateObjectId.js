const mongoose = require('mongoose');
const { sendError } = require('../utils/apiResponse');

/**
 * Validates whether route parameters are valid MongoDB ObjectIds
 * @param {String} paramName - Name of the route parameter (default 'id')
 */
const validateObjectId = (paramName = 'id') => {
  return (req, res, next) => {
    const id = req.params[paramName];
    if (id && !mongoose.Types.ObjectId.isValid(id)) {
      return sendError(res, 400, `Invalid ID format: ${id}`);
    }
    next();
  };
};

module.exports = validateObjectId;
