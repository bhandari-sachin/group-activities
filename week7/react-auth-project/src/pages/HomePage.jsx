import Features from "../components/Features";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
import Hero from "../components/Hero";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <JobListings />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
