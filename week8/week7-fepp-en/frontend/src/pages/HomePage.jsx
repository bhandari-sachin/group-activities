import PropertyListings from "../components/PropertyListings";
import ViewAllProperties from "../components/ViewAllProperteis";

const Home = () => {
  return (
    <div>
      <PropertyListings isHome={true} />
      <ViewAllProperties />
    </div>
  );
};

export default Home;
