const express = require("express");
const mongoose = require("mongoose");
const Sauce = require("./models/sauce");
const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const path = require("path");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

dotenv.config();
connexionString = process.env.DB_CONNEXION_STRING;
mongoose
  .connect(connexionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

const limiter = rateLimit({
  max: 50,
  windowMs: 60 * 1000,
  message: "Too many request from this IP",
});
app.use(limiter);

app.use(helmet());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
  next()
})

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
