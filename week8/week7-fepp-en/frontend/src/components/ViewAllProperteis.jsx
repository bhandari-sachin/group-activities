import { Link } from "react-router-dom";

const ViewAllProperties = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/properties"
        className="block bg-indigo-500 text-white text-center px-3 py-2 rounded-lg hover:bg-indigo-600 w-full"
      >
        View All Properties
      </Link>
    </section>
  );
};
export default ViewAllProperties;
