const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const internSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  collegeId: {
    type: objectId,
    ref: "College",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Intern", internSchema);

//{ name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}
