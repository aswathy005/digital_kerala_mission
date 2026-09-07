const mongoose = require('mongoose');

const siteContentSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: [true, 'Section is required'],
      trim: true,
    },
    key: {
      type: String,
      required: [true, 'Key is required'],
      trim: true,
    },
    value: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, 'Value is required'],
    },
    type: {
      type: String,
      enum: ['text', 'html', 'image', 'json', 'array', 'boolean', 'number'],
      default: 'text',
    },
  },
  {
    timestamps: true,
  }
);

// Ensure unique keys per section
siteContentSchema.index({ section: 1, key: 1 }, { unique: true });

module.exports = mongoose.model('SiteContent', siteContentSchema);
