const User = require("../model/Users");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send({ users: users });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const user = await User.findById(_id);
    res.send({ user: user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const user = req.body;
  try {
    const addUser = await User.create( user );
    res.send(addUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const _id = req.params.id;
  const user = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate({ _id }, user);
    res.send(updateUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete({ _id });
    res.send(deletedUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
