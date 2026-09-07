const mongoose = require('mongoose');

const franchiseApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
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
    currentOccupation: {
      type: String,
      required: [true, 'Current occupation is required'],
      trim: true,
    },
    relevantExperience: {
      type: String,
      trim: true,
      default: '',
    },
    reasonForInterest: {
      type: String,
      required: [true, 'Reason for interest is required'],
      trim: true,
    },
    preferredContactMethod: {
      type: String,
      trim: true,
      default: 'Phone',
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

module.exports = mongoose.model('FranchiseApplication', franchiseApplicationSchema);
