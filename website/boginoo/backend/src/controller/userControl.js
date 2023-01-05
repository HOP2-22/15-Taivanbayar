const User = require("../model/users");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({ email, password: hashedPassword });
    res.status(200).send({ message: "created successfully", data: user });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.getUsers = async (_req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};
