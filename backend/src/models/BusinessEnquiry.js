const mongoose = require('mongoose');

const businessEnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    businessName: {
      type: String,
      required: [true, 'Business name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      lowercase: true,
      trim: true,
    },
    district: {
      type: String,
      required: [true, 'District is required'],
      trim: true,
    },
    businessCategory: {
      type: String,
      required: [true, 'Business category is required'],
      trim: true,
    },
    currentDigitalPresence: {
      type: String,
      trim: true,
      default: '',
    },
    mainChallenge: {
      type: String,
      trim: true,
      default: '',
    },
    preferredContactTime: {
      type: String,
      trim: true,
      default: 'Anytime',
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Qualified', 'Converted', 'Closed'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('BusinessEnquiry', businessEnquirySchema);
