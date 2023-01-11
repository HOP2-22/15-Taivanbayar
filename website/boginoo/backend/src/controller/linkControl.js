const Link = require("../model/links");

exports.createLink = async (req, res) => {
  try {
    const url = req.body;
    const link = await Link.create(url);
    res.status(200).send(link);
  } catch (error) {
    res.status(404).send({ message: "Wrong URL" });
  }
};

exports.getLink = async (req, res, next) => {
  try {
    const url = await Link.find();
    res.status(200).send(url);
  } catch (error) {
    res.status(404).send({ message: "Failed to get link" });
  }
};

exports.goLink = async (req, res) => {
  const id = req.params.id;
  try {
    await Link.find({
      short: id,
    });
    res.status(200).json("sucessfully created");
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
