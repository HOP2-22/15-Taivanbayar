const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  tags: { type: Array },
});

const Tag = mongoose.model("tags", TagSchema);

module.exports = Tag;
