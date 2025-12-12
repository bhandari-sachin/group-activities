// JobPage.jsx
import { useState } from "react";
import { useParams, useLoaderData, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";
import Modal from "../components/Modal";

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const [showModal, setShowModal] = useState(false);

  if (!job) {
    return (
      <section className="container m-auto py-24 text-center">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
        <Link
          to="/jobs"
          className="text-indigo-500 mt-4 inline-block hover:text-indigo-600"
        >
          Back to Job Listings
        </Link>
      </section>
    );
  }

  const handleDelete = async () => {
    try {
      await deleteJob(job.id);
      toast.success("Job deleted successfully");
      navigate("/jobs");
    } catch (err) {
      toast.error("Failed to delete job");
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
        title="Delete Job?"
        message="Are you sure you want to delete this job listing? This action cannot be undone."
      />

      {/* Back Link */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      {/* Job Details */}
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
            {/* Main Content */}
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company.name}</h2>
                {job.company.description && (
                  <p className="my-2">{job.company.description}</p>
                )}
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.email}
                </p>
                {job.company.website && (
                  <>
                    <h3 className="text-xl">Website:</h3>
                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                      {job.company.website}
                    </p>
                  </>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export const jobLoader = async ({ params }) => {
  // Example: fetch from API or static JSON
  const res = await fetch(`/api/jobs/${params.id}`);
  if (!res.ok) {
    // Gracefully throw 404 for React Router
    throw new Response("Job Not Found", { status: 404 });
  }
  const data = await res.json();
  return data;
};

export default JobPage;
