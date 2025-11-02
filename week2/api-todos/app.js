import express from "express";
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./todoHandlers.js"; // Note the .js extension

const app = express();

// Middleware to parse JSON
app.use(express.json());

// ROUTES
app.get("/todos", getAllTodos);
app.post("/todos", createTodo);
app.get("/todos/:todoId", getTodoById);
app.put("/todos/:todoId", updateTodo);
app.delete("/todos/:todoId", deleteTodo);

// Export the app instead of starting the server
export default app;
