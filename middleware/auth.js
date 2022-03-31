const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const tokenSecret = process.env.TOKEN_SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenSecret);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } 
    next(); 
  } 
  catch(error){res.status(500).json(error.message)}; 
}
