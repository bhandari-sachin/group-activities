import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PropertiesPage from "./pages/PropertiesPage.jsx";
import PropertyPage, { propertyLoader } from "./pages/PropertyPage.jsx";
import AddPropertyPage from "./pages/AddPropertyPage.jsx";

const App = () => {
  // Delete property
  const deleteProperty = async (propertyId) => {
    const response = await fetch(`/api/properties/${propertyId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete property");
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="properties" element={<PropertiesPage />} />

        <Route
          path="properties/:id"
          element={<PropertyPage deleteProperty={deleteProperty} />}
          loader={propertyLoader}
        />

        <Route path="add-property" element={<AddPropertyPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
