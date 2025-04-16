const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String },

  jobDescription: { type: String },
  jobType: { type: String },

  url: { type: String, required: true },
  platform: { type: String },

  applicationUrl: { type: String },
  applicationDeadline: { type: Date },
  postDate: { type: Date },

  hash: { type: String, unique: true },

}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
