const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongodocker');

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true }
    );

    console.log(`MongoDB is Connected... ${db}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
