/**
 * Generates a clean URL slug from string
 * @param {String} text 
 * @returns {String} slug
 */
const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with a single dash
    .replace(/^-+|-+$/g, '');  // Trim leading & trailing dashes
};

module.exports = slugify;
