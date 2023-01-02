const { response } = require("express");
const List = require("../model/lists");

exports.createList = async (req, res) => {
  try {
    const list = req.body;
    const todo = await List.create(list);
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
};

exports.getList = async (req, res) => {
  try {
    const list = await List.find();
    res.send(list);
  } catch (error) {
    res.send(error);
  }
};

exports.updateList = async (req, res) => {
  const _id = req.params.id;
  const list = req.body;
  try {
    await List.findByIdAndUpdate({ _id }, list);
    res.send({message: "complete"})
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteList = async (req, res) => {
  const _id = req.params.id;
  try {
    await List.findByIdAndDelete({ _id });
    res.send({message: "complete"})
  } catch (error) {
    console.log(error);
  }
};

exports.deleteAll = async (req, res) => {
    try {
        await List.remove();
        res.send({message: "complete"}) 
    } catch (error) {
       console.log(error) 
    }
}
