import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="flex items-center h-full p-16 bg-white dark:bg-gray-900">
      <FaExclamationTriangle className="text-indigo-600 text-9xl" />
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <h1 className="font-bold text-indigo-600 text-9xl">404</h1>
        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, we couldn't find this page.
        </p>
        <p className="mt-4 mb-8 text-gray-600 dark:text-gray-400">
          But don't worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
