import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const isLong = job.description.length > 90;
  const description =
    showFullDescription || !isLong
      ? job.description
      : job.description.substring(0, 90) + "...";

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
          <div className="mb-2">{description}</div>
          {isLong && (
            <button
              onClick={() => setShowFullDescription((prev) => !prev)}
              className="text-indigo-500 mb-5 hover:text-indigo-600"
            >
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
          )}
          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
          <div className="border border-gray-100 mb-5"></div>
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />

            {job.location}
          </div>
          <a
            href={`/jobs/${job.id}`}
            className="h-9 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
