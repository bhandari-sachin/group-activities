import { useState } from "react";
import { useParams, useLoaderData, useNavigate, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarker,
  FaRulerCombined,
  FaCalendar,
  FaBed,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Modal from "../components/Modal";

const PropertyPage = ({ deleteProperty }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const property = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  if (!property) {
    return (
      <section className="container m-auto py-24 text-center">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
        <Link
          to="/properties"
          className="text-indigo-500 mt-4 inline-block hover:text-indigo-600"
        >
          Back to Property Listings
        </Link>
      </section>
    );
  }

  const handleDelete = async () => {
    try {
      await deleteProperty(property._id);
      toast.success("Property deleted successfully");
      navigate("/properties");
    } catch (err) {
      toast.error("Failed to delete property");
      console.error(err);
    }
  };

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title="Delete Property?"
        message="Are you sure you want to delete this property listing? This action cannot be undone."
      />

      {/* Back Link */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/properties"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Property Listings
          </Link>
        </div>
      </section>

      {/* Property Details */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
            {/* Main Content */}
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{property.type}</div>
                <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
                <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">
                    {property.location.address}, {property.location.city},{" "}
                    {property.location.state}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-4">
                  Property Description
                </h3>
                <p className="mb-4">{property.description}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FaBed /> <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRulerCombined /> <span>{property.squareFeet} sq ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar /> <span>Built in {property.yearBuilt}</span>
                  </div>
                </div>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Price
                </h3>
                <p className="mb-4 text-indigo-600 font-bold text-xl">
                  ${property.price.toLocaleString()}
                </p>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Manage Property</h3>
                <Link
                  to={`/edit-property/${property.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full block"
                >
                  Edit Property
                </Link>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
                >
                  Delete Property
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const propertyLoader = async ({ params }) => {
  console.log("Loading property with ID:", params.id);
  const res = await fetch(`/api/properties/${params.id}`);
  if (!res.ok) throw new Response("Property Not Found", { status: 404 });
  const data = await res.json();
  return data;
};

export { PropertyPage as default, propertyLoader };
