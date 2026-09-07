const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema(
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
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    testimonial: {
      type: String,
      required: [true, 'Testimonial is required'],
      trim: true,
    },
    image: {
      type: String,
      trim: true,
      default: '',
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SuccessStory', successStorySchema);
