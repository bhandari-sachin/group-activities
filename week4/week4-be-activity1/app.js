require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const carRouter = require("./routes/carRouter");
const userRouter = require("./routes/userRouter");
const blogRouter = require("./routes/blogRouter");

const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} = require("./middleware/customMiddleware");

/**
 * @fileoverview Main server file for API
 * Sets up Express app, connects to MongoDB, defines routes and middleware, and starts the server.
 */

// Create an Express application
const app = express();

// Connect to MongoDB
connectDB();

/**
 * Middleware to parse JSON request bodies
 */
app.use(express.json());

/**
 * Custom middleware to log incoming requests
 * Logs method, path, and request body
 */
app.use(requestLogger);

/**
 * Root route - simple API health check
 * GET /
 * @returns {string} "API Running!"
 */
app.get("/", (req, res) => res.send("API Running!"));

/**
 * Car routes
 * All routes starting with /api/cars are handled by carRouter
 */
app.use("/api/cars", carRouter);

/**
 * Blog routes
 * All routes starting with /api/blogs are handled by blogRouter
 */
app.use("/api/blogs", blogRouter);

/**
 * User routes
 * All routes starting with /api/users are handled by userRouter
 */
app.use("/api/users", userRouter);

/**
 * Middleware to handle unknown endpoints (404)
 */
app.use(unknownEndpoint);

/**
 * Centralized error handling middleware
 * Handles all errors passed with next(err)
 */
app.use(errorHandler);

const port = process.env.PORT || 4000;

/**
 * Starts the Express server
 */
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
