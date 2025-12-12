import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useJobForm from "../hooks/useJobForm";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormTextarea from "../components/FormTextarea";

const AddJobPage = ({ addJobSubmit }) => {
  const navigate = useNavigate();

  const { job, company, handleChange, handleCompanyChange, resetForm } =
    useJobForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      ...job,
      company: { ...company },
    };

    addJobSubmit(newJob);
    toast.success("Job Added Successfully");

    resetForm();
    navigate("/jobs");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

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
              object="company"
              value={company.name}
              onChange={handleCompanyChange}
            />

            <FormTextarea
              label="Company Description"
              id="description"
              object="company"
              rows="4"
              placeholder="What does your company do?"
              value={company.description}
              onChange={handleCompanyChange}
            />

            <FormInput
              label="Contact Email"
              id="contactEmail"
              type="email"
              placeholder="Email address for applicants"
              value={company.email}
              onChange={handleCompanyChange}
              required
            />

            <FormInput
              label="Contact Phone"
              id="contactPhone"
              type="tel"
              placeholder="Optional phone for applicants"
              value={company.contactPhone}
              onChange={handleCompanyChange}
            />

            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
              type="submit"
            >
              Add Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
