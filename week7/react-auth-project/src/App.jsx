import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero
        title="Welcome to Tech Jobs Portal"
        subtitle="Find your dream job today!"
      />
    </div>
  );
}

export default App;
