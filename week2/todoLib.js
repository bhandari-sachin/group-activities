// The data model for a car is as follows
/*
{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
}
*/
let todoArray = [];
let nextId = 1;

const addOne = (task, completed = false, dueDate = null) => {
  if (!task || task.trim() === "") return null;

  const newTodo = {
    id: nextId++,
    task: task.trim(),
    completed,
    dueDate,
  };

  todoArray.push(newTodo);
  return newTodo;
};

// function to get all todo items
const getAll = () => {
  return todoArray;
};

// function to find a todo item by its id
const findById = (id) => {
  const numericId = Number(id);
  const todo = todoArray.find((todo) => todo.id === numericId);
  return todo ?? null;
};

// function to update a todo item by its id
const updateOneById = (id, updatedData) => {
  const todo = findById(id);
  if (!todo) return null;
  ["task", "completed", "dueDate"].forEach((prop) => {
    if (updatedData[prop] !== undefined) {
      todo[prop] = updatedData[prop];
    }
  });

  return todo;
};

// function to delete a todo item by its id
const deleteOneById = (id) => {
  const todo = findById(id);
  if (!todo) return null; // not found

  todoArray = todoArray.filter((t) => t.id !== Number(id));
  return todo; // return deleted todo
};

// Testing the module
// Testing the module
if (require.main === module) {
  console.log("Initial todo list:", getAll());
  console.log("\nAdding todos:");
  console.log(addOne("Buy groceries", false, "2025-08-30"));
  console.log(addOne("Walk the dog", true));

  console.log("\nTodo list after additions:", getAll());

  console.log("\nFinding todo with ID 1:", findById(1));

  console.log(
    "\nUpdating todo with ID 1:",
    updateOneById(1, { completed: true })
  );

  console.log("\nTodo list after update:", getAll());

  console.log("\nDeleting todo with ID 2:", deleteOneById(2));

  console.log("\nFinal todo list:", getAll());
}

const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDos;
