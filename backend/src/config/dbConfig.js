const mongoose = require("mongoose");

const dbConfig = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to mongo database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConfig;
