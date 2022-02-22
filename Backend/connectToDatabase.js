const mongoose = require("mongoose");
const connectToDatabase = () => {
  // Connect to data base
  mongoose.connect(
    "mongodb+srv://bibhu0424:Mongo@042403@note-app.rpwzb.mongodb.net/Notes_data",
    () => {
      console.log("Connected to database");
    }
  );
};
module.exports = connectToDatabase;
