import { useState } from "react";
import { Link } from "react-router-dom";

const PropertyListing = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{property.type}</div>
          <h3 className="text-2xl font-bold">{property.title}</h3>
          <div className="mb-2">{property.description}</div>
          <h3 className="text-indigo-500 mb-2">{property.price}</h3>
          <div className="border border-gray-100 mb-5">
            <Link
              to={`/properties/${property._id}`}
              className="block bg-indigo-500 text-white text-center px-3 py-2 rounded-b-lg hover:bg-indigo-600"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
