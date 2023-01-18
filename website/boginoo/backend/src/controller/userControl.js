const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({ email, password: hashedPassword });
    res.send({ message: "created successfully", data: user });
  } catch (error) {
    res.send(error);
  }
};

exports.getUsers = async (_req, res) => {
  try {
    const users = await User.find();
    res.send({ user: users });
  } catch (error) {
    res.send(error);
  }
};
exports.getUser = async (_req, res) => {
  try {
    const user = await User.find({
      email: _req.params.email,
    });
    res.send({ user: user });
  } catch (error) {
    res.send(error);
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: "1h" }
      );
      res.send({ email: user.email, match: match, token: token }).status(200);
    } else {
      res.send({ message: "failed" }).status(500);
    }
  } catch (error) {
    res.send({ message: error }).status(500);
  }
};
