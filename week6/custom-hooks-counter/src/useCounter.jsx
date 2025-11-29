import { useState } from "react";

// A ressable custom hook to manage a counter logic

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initialValue);

  return { counter, increment, decrement, reset };
};
