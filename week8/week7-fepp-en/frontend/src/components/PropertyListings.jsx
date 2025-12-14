import { useEffect, useState } from "react";
import PropertyListing from "./PropertyListing";
import Spinner from "./Spinner";

const PropertyListings = ({ isHome = false }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProperties = async () => {
      const apiUrl = isHome ? "api/properties?limit=3" : "api/properties";

      try {
        const response = await fetch(apiUrl);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [isHome]);

  return (
    <section className="bg-blue-50 py-8 px-4">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Properties" : "All Property Listings"}
        </h2>

        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyListing
                key={property._id || property.id}
                property={property}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyListings;
