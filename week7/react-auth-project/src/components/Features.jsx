import FeatureCard from "./FeatureCard";
import React from "react";

const Features = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-r-lg">
          <FeatureCard>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Explore a wide range of tech job listings from top companies
              around the world. Apply easily and track your applications all in
              one place.
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </a>
          </FeatureCard>
          <FeatureCard bgColor="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              Post job openings, manage applications, and find the perfect
              candidates for your tech roles.
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Post a Job
            </a>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
