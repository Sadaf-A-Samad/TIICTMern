const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
const User = require("./models/User");

const { connectDB } = require("./config/db");

// Passwrod encryptions Salt
const salt = bcrypt.genSaltSync(10);
// Another Secret Key (Salt)
const secret = 'sdfwe&*(nc{">34326/@!5jb~$';

dotenv.config();
connectDB();

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
// Routes

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      // userLogged in
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json("Wrong Credentials...");
    }
  } catch (e) {
    res.status(400).json(e);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
  // res.json(req.cookies);
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Logout OK");
});

// port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(PORT);
  console.log(
    `Server is running ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white
  );
});
