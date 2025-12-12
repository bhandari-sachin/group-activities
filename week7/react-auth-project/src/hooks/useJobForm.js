import { useState } from "react";

const useJobForm = () => {
  const [job, setJob] = useState({
    title: "",
    type: "Full-Time",
    location: "",
    description: "",
    salary: "Under $50K",
  });

  const [company, setCompany] = useState({
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (e) => {
    setJob((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCompanyChange = (e) => {
    setCompany((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const resetForm = () => {
    setJob({
      title: "",
      type: "Full-Time",
      location: "",
      description: "",
      salary: "Under $50K",
    });

    setCompany({
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    });
  };

  return {
    job,
    company,
    handleChange,
    handleCompanyChange,
    resetForm,
  };
};

export default useJobForm;
