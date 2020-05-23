const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Comment", commentSchema);