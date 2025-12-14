import { useState } from "react";

const useForm = () => {
  const [property, setProperty] = useState({
    title: "",
    description: "",
    type: "",
    price: "",
    squareFeet: "",
    bedrooms: "",
    yearBuilt: "",
  });
  const [location, setLocation] = useState({
    address: "",
    city: "",
    state: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };
  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation({
      ...location,
      [name]: value,
    });
  };

  const resetForm = () => {
    setProperty({
      title: "",
      description: "",
      type: "",
      price: "",
      squareFeet: "",
      bedrooms: "",
      yearBuilt: "",
    });
    setLocation({
      address: "",
      city: "",
      state: "",
    });
  };

  return {
    property,
    location,
    handleChange,
    handleLocationChange,
    resetForm,
  };
};
export default useForm;
