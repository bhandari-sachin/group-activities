import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useForm from "../../hooks/useForm";

const AddPropertyPage = ({ addProperty }) => {
  const navigate = useNavigate();

  const { property, location, handleChange, handleLocationChange, resetForm } =
    useForm();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProperty = {
      ...property,
      location,
    };
    addProperty(newProperty);
    toast.success("Property added successfully!");
    resetForm();
    navigate("/");
  };

  return (
    <section className="container m-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Add New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Property Details */}
        <div>
          <label className="block mb-2 font-medium" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={property.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="type">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={property.type}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="squareFeet">
            Square Feet
          </label>
          <input
            type="number"
            id="squareFeet"
            name="squareFeet"
            value={property.squareFeet}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="bedrooms">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="yearBuilt">
            Year Built
          </label>
          <input
            type="number"
            id="yearBuilt"
            name="yearBuilt"
            value={property.yearBuilt}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        {/* Location Details */}
        <div>
          <label className="block mb-2 font-medium" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={location.address}
            onChange={handleLocationChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={location.city}
            onChange={handleLocationChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="state">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={location.state}
            onChange={handleLocationChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Property
        </button>
      </form>
    </section>
  );
};
export default AddPropertyPage;
