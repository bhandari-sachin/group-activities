// tests/setup.js
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export async function connect() {
  // Disconnect from any existing connection first
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  // Use test database URI from .env
  const testUri = process.env.MONGO_TEST_URI;

  if (!testUri) {
    throw new Error("MONGO_TEST_URI is not defined in .env file");
  }

  await mongoose.connect(testUri);
  console.log("Connected to test database");
}

export async function closeDatabase() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
}

export async function clearDatabase() {
  if (mongoose.connection.readyState !== 0) {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  }
}
