import Hero from "../components/Hero";
import Features from "../components/Features";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
