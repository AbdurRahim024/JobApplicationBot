const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  school: String,
  degree: String,
  major: String,
  startDate: Date,
  endDate: Date,
  gpa: Number
}, { _id: false });

const ExperienceSchema = new mongoose.Schema({
  company: String,
  title: String,
  description: String,
  location: String,
  startDate: Date,
  endDate: Date
}, { _id: false });

const UserSchema = new mongoose.Schema({
  autoSubmit: Boolean,
  email: { type: String, required: true, unique: true },

  firstName: String,
  middleName: String,
  lastName: String,
  preferredName: String,
  phoneNumber: String,

  city: String,
  state: String,
  country: String,
  zipCode: String,

  education: [EducationSchema],
  experience: [ExperienceSchema],
  skills: [String],

  resumeUrl: String,
  linkedInUrl: String,
  githubUrl: String,
  portfolioUrl: String,

  visaRequired: {
    canada: Boolean,
    usa: Boolean
  },

  preferences: {
    jobTypes: [String],
    locations: [String],
    minSalary: Number,
    notificationEmail: Boolean
  }
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
