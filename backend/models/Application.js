const mongoose = require('mongoose');

const FollowUpSchema = new mongoose.Schema({
  date: Date,
  type: String,
  notes: String
}, { _id: false });

const AutomationDataSchema = new mongoose.Schema({
  processedAt: Date,
  attempts: Number,
  success: Boolean,
  errorMessages: [String],
  screenshots: [String]
}, { _id: false });

const ApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },

  status: {
    type: String,
    enum: ['submitted', 'accepted', 'rejected', 'interview', 'OA', 'error'],
    default: 'submitted'
  },

  applicationDate: { type: Date, default: Date.now },
  lastStatusUpdate: { type: Date },

  automationData: AutomationDataSchema,

  followUpHistory: [FollowUpSchema]

}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
