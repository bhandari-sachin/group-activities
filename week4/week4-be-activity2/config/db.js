const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true,
    });
    console.log(`Connected to database, host: ${conn.connection.host}`);

    const collections = ["blogs", "users", "cars"];

    const existingCollections = await conn.connection.db
      .listCollections()
      .toArray();
    const existingNames = existingCollections.map((col) => col.name);

    for (const name of collections) {
      if (existingNames.includes(name)) {
        await conn.connection.db.collection(name).drop();
        console.log(`Collection "${name}" dropped!`);
      } else {
        console.log(`Collection "${name}" does not exist.`);
      }
    }

    console.log("All requested collections processed.");
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
