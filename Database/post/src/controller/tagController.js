const Tag = require("../model/tags");

exports.getListOfTag = async (req, res) => {
  try {
    const tag = await Tag.find();
    res.send({ tag: tag });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
