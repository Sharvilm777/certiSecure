const express = require("express");
const User = require("./User");
const connectDB = require("./connectDBWOS");

const app = express();
connectDB.connect();

app.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
app.get("/getusers", async (req, res) => {
    try {
      
  } catch (error) {}
});

app.listen(3000, () => console.log("Server started on port 3000"));
