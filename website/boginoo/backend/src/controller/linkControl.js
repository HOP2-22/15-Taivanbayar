const Link = require("../model/links");

exports.createLink = async (req, res) => {
  try {
    const url = req.body;
    const link = await Link.create(url);
    res.send(link);
  } catch (error) {
    res.status(404).send({ message: "Wrong URL" });
  }
};

exports.getLink = async (req, res) => {
  try {
    const url = await Link.find();
    res.send(url);
  } catch (error) {
    res.status(404).send({ message: "Failed to get link" });
  }
};

exports.goLink = async (req, res) => {
  const id = req.params.id;
  try {
    const link = await Link.find({
      short: id,
    });
    res.send(link[0].original);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
