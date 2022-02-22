const express = require("express");
const cors = require("cors");
const connect = require("./connectToDatabase");
const app = express();
const User = require("./schema");
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const requestBody = req.body;
  const newNotes = new User({
    author: requestBody.author,
    notes: requestBody.notes,
  });

  await newNotes.save();
  return res.json(true);
});

app.get("/", async (req, res) => {
  const noteList = await User.find();
  return res.json(noteList);
});

const port = process.env.PORT || 4600;
app.listen(port, () => {
  console.log("Server started! ");
  connect();
});
