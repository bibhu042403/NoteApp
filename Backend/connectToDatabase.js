const mongoose = require("mongoose");
const connectToDatabase = () => {
  // Connect to data base
  mongoose.connect(
    "mongodb+srv://bibhu:bibhu@netapp.plgz2.mongodb.net/Notes_data",
    () => {
      console.log("Connected to database");
    }
  );
};
module.exports = connectToDatabase;
