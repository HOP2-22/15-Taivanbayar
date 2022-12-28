const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  tags: { type: Array, required: true  },
});

const Tag = mongoose.model("tags", TagSchema);

module.exports = Tag;
