import Property from "../models/property.model.js";
import mongoose from "mongoose";

// GET /properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({}).sort({ createdAt: -1 });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// post /properties
export const createProperty = async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.status(201).json(newProperty);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// GET /properties/:propertyId
export const getPropertyById = async (req, res) => {
  res.send("getPropertyById");
};

// PUT /properties/:propertyId
export const updateProperty = async (req, res) => {
  res.send("updateProperty");
};

// DELETE /properties/:propertyId
export const deleteProperty = async (req, res) => {
  res.send("deleteProperty");
};

export default {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
