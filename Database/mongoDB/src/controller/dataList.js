const Task = require("../models/task");

exports.showLists = async (req, res) => {
  const data = await Task.find({});
  res.send(data);
}; //get
exports.createLists = async (req, res) => {
   await Task.create({
    title: req.body.title,
    detail: ["1", "2", "3"],
  });

  res.send({ message: "successed" });
}; //post

exports.deleteItems = async (req, res) => {
    await Task.findByIdAndDelete({_id: req.body.id});
    res.send({message: "deleted"})
}; //delete

exports.updateItems = async (req, res) => {
  await Task.findByIdAndUpdate({ _id: req.body.id  }, { title: req.body.title });
  res.send({ message: "succeeded" });
}; //put
