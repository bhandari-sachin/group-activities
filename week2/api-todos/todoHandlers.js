import Todos from "../todoLib.js";

// GET /todos endpoint
export const getAllTodos = (req, res) => {
  const todos = Todos.getAll();
  res.json(todos);
};

// POST /todos endpoint
export const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTodo = Todos.addOne(task, completed, dueDate);
  res.status(201).json(newTodo);
};

// GET /todos/:todoId endpoint
export const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const todo = Todos.findById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};
// PUT /todos/:todoId endpoint
export const updateTodo = (req, res) => {
  const todoId = req.params.todoId;
  const updatedData = req.body;
  const updatedTodo = Todos.updateOneById(todoId, updatedData);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// DELETE /todos/:todoId endpoint
export const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;
  const deletedTodo = Todos.deleteOneById(todoId);
  if (deletedTodo) {
    res.json(deletedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};
