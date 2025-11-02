// The data model for a car is as follows
/*
{
    "model": "Corolla",
    "color": "Red",
    "age": 3
}
*/

let carArray = [];
let nextId = 1;

const addOne = (model, color, age) => {
  // Check if any parameter is empty or undefined
  if (!model || !color || age === undefined) {
    return false;
  }
  const newCar = {
    id: nextId++,
    model,
    color,
    age,
  };
  carArray.push(newCar);
  return newCar;
};

const getAll = () => {
  return carArray;
};

// function to find a car by its id

const findById = (id) => {
  const numericId = Number(id);
  const car = carArray.find((car) => car.id === numericId);
  return car || null;
};

// function to update a car by its id
const updateOneById = (id, updatedData) => {
  const car = findById(id);
  if (!car) return false;

  ["model", "color", "age"].forEach((prop) => {
    if (updatedData[prop]) car[prop] = updatedData[prop];
  });

  return car;
};

// Delete an element by its id
const deleteOneById = (id) => {
  const car = findById(id);
  if (!car) return false;
  const initialLength = carArray.length;
  carArray = carArray.filter((car) => car.id !== Number(id));
  return carArray.length < initialLength;
};

// Testing the module
if (require.main === module) {
  console.log("Adding cars:");
  console.log(addOne("Corolla", "Red", 3));
  console.log(addOne("Civic", "Blue", 5));
  console.log(addOne("Model S", "Black", 2));

  console.log("\nAll cars:");
  console.log(getAll());

  console.log("\nFinding car with ID 2:");
  console.log(findById(2));

  console.log("\nUpdating car with ID 1:");
  console.log(updateOneById(1, { color: "Green", age: 4 }));

  console.log("\nAll cars after update:");
  console.log(getAll());

  console.log("\nDeleting car with ID 3:");
  console.log(deleteOneById(3));

  console.log("\nAll cars after deletion:");
  console.log(getAll());
}

const Car = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
module.exports = Car;
