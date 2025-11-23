import { useState, useEffect } from "react";

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []);

  useEffect(() => {
    console.log("UseEffect2 Ran");

    if (toggleTwo) {
      console.log("ToggleTwo slice of state is true so this code runs");
    }
  }, [toggleTwo]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`UseEffect3 with interval number: ${count} is running`);
    }, 1000);

    return () => {
      console.log(`Cleanup for UseEffect3 with count number: ${count}`);
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>UseEffectTest Component</h1>

      <button onClick={() => setToggleOne(!toggleOne)}>toggleOne</button>

      <button onClick={() => setToggleTwo(!toggleTwo)}>toggleTwo</button>

      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
};

export default UseEffectTest;
