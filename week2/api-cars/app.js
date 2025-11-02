import express from "express";
import {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from "./carHandlers.js"; // Note the .js extension

const app = express();

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /cars
app.get("/cars", getAllCars);

// POST /cars
app.post("/cars", createCar);

// GET /cars/:carId
app.get("/cars/:carId", getCarById);

// PUT /cars/:carId
app.put("/cars/:carId", updateCar);

// DELETE /cars/:carId
app.delete("/cars/:carId", deleteCar);

const port = 4000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
