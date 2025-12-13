import express from "express";

import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

// Define your property routes here
// get all properties

router.get("/", getAllProperties);

// create a new property
router.post("/", createProperty);

// get a property by ID
router.get("/:propertyId", getPropertyById);

// update a property by ID
router.put("/:propertyId", updateProperty);

// delete a property by ID
router.delete("/:propertyId", deleteProperty);

export default router;
