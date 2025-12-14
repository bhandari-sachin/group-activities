import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-8 w-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
