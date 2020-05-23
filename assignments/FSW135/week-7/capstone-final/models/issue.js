const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const issueSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment", default: []}],
  upvotes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  },
  downvotes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  }
});

module.exports = mongoose.model("Issue", issueSchema);