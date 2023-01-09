const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");
exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({email, password: hashedPassword});
    res.send({ message: "created successfully", data: user });
  } catch (error) {
    console.log(error);
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

const ACCESS_TOKEN_KEY = "766755hkjhhhh-jad-qfasd-fsdaf-afsadfadsf-asf"

exports.Login = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email: email});
    const match = await bcrypt.compare(password, user.password);
    if(match) {
      const token = jwt.sign({
        email: user.email
      }, ACCESS_TOKEN_KEY)
    res.send({ user: user, match: match, token: token });

    } else {
      res.send({message: "failed"})
    }
  } catch (error) {
    res.send({message: error})
  }
}
