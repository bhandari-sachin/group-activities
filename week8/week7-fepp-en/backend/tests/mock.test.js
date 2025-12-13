import request from "supertest";
import app from "../app.js";
import { connect, closeDatabase, clearDatabase } from "./setup.js";

const validProperty = {
  title: "Cozy Apartment",
  type: "Apartment",
  description: "A cozy apartment in the city center.",
  price: 1200,
  location: { address: "123 Main St", city: "Metropolis", state: "NY" },
  squareFeet: 850,
  yearBuilt: 2005,
  bedrooms: 2,
};

const invalidProperty = {
  title: "",
  type: "Apartment",
  price: -500,
  location: { address: "123 Main St", city: "Metropolis", state: "NY" },
  squareFeet: 850,
  yearBuilt: 2005,
  bedrooms: 2,
};

beforeAll(async () => {
  await connect();
}, 10000);

afterAll(async () => {
  await closeDatabase();
}, 10000);

afterEach(async () => {
  await clearDatabase();
});

describe("POST /api/properties", () => {
  it("should create a property when payload is valid", async () => {
    const res = await request(app).post("/api/properties").send(validProperty);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(validProperty.title);
  });

  it("should return 400 when required fields are missing", async () => {
    const res = await request(app)
      .post("/api/properties")
      .send(invalidProperty);
    expect(res.statusCode).toBe(400);
  });
});

describe("GET /api/properties", () => {
  it("should return a list of properties", async () => {
    await request(app).post("/api/properties").send(validProperty);
    const res = await request(app).get("/api/properties");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
  });
});
