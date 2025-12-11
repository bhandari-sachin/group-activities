import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import JobListings from "./components/JobListings";

function App() {
  return (
    <div>
      <Header />
      <Hero
        title="Welcome to Tech Jobs Portal"
        subtitle="Find your dream job today!"
      />
      <Features />
      <JobListings />
    </div>
  );
}

export default App;
