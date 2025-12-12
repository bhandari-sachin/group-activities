import { useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useJobForm from "../hooks/useJobForm";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormTextarea from "../components/FormTextarea";

const EditJobPage = ({ updateJob }) => {
  const navigate = useNavigate();
  const jobData = useLoaderData();

  // useJobForm hook provides state and handlers
  const { job, company, handleChange, handleCompanyChange, setJobForm } =
    useJobForm();

  // Populate form with loaded job data
  useEffect(() => {
    if (jobData) {
      setJobForm({ job: jobData, company: jobData.company });
    }
  }, [jobData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedJob = { ...job, company: { ...company }, id: jobData.id };

    try {
      await updateJob(updatedJob);
      toast.success("Job updated successfully");
      navigate("/jobs");
    } catch (err) {
      toast.error("Failed to update job");
      console.error(err);
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Job
            </h2>

            <FormSelect
              label="Job Type"
              id="type"
              value={job.type}
              onChange={handleChange}
              options={["Full-Time", "Part-Time", "Remote", "Internship"]}
            />

            <FormInput
              label="Job Listing Name"
              id="title"
              placeholder="e.g. Junior React Developer"
              value={job.title}
              onChange={handleChange}
              required
            />

            <FormTextarea
              label="Description"
              id="description"
              rows="4"
              placeholder="Add job duties, expectations, requirements…"
              value={job.description}
              onChange={handleChange}
            />

            <FormSelect
              label="Salary"
              id="salary"
              value={job.salary}
              onChange={handleChange}
              options={[
                "Under $50K",
                "$50K - 60K",
                "$60K - 70K",
                "$70K - 80K",
                "$80K - 90K",
                "$90K - 100K",
                "$100K - 125K",
                "$125K - 150K",
                "$150K - 175K",
                "$175K - 200K",
                "Over $200K",
              ]}
            />

            <FormInput
              label="Location"
              id="location"
              placeholder="Company Location"
              value={job.location}
              onChange={handleChange}
              required
            />

            <h3 className="text-2xl mb-5 mt-6">Company Info</h3>

            <FormInput
              label="Company Name"
              id="name"
              value={company.name}
              onChange={handleCompanyChange}
            />

            <FormTextarea
              label="Company Description"
              id="description"
              rows="4"
              placeholder="What does your company do?"
              value={company.description}
              onChange={handleCompanyChange}
            />

            <FormInput
              label="Contact Email"
              id="email"
              type="email"
              placeholder="Email address for applicants"
              value={company.email}
              onChange={handleCompanyChange}
              required
            />

            <FormInput
              label="Website"
              id="website"
              placeholder="Company website"
              value={company.website}
              onChange={handleCompanyChange}
            />

            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
              type="submit"
            >
              Update Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
