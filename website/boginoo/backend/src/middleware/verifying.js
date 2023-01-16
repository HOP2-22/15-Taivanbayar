const jwt = require("jsonwebtoken");

exports.authenticateToken = async (req, res, next) => {
  const { token } = req.body;
  // console.log("Authenticate", JSON.stringify(req.headers));
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, _user) => {
      if (error) {
        return res.status(500).send(error, "Invalid credentials");
      }
      next();
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
