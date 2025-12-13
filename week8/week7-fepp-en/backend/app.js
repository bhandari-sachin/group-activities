import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import propertyRouter from "./routes/property.routes.js";
import {
  unknownEndpoint,
  errorHandler,
  requestLogger,
} from "./middleware/customMiddleware.js";
import connectDB from "./config/db.js";
import cors from "cors";

// Middlewares
app.use(cors());
app.use(express.json());
app.use(requestLogger);

connectDB();

// Use the jobRouter for all "/jobs" routes
//app.use("/api/jobs", jobRouter);

app.use("/api/properties", propertyRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`)
// })
