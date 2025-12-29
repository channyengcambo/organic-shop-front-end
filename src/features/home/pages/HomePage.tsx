import PopularCategories from "../popular-category/PopularCategories";
import CustomerFeature from "./customer-feature/CustomerFeature";
import HeroComponent from "./hero/HeroComponent";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <CustomerFeature />
      <PopularCategories />
    </div>
  );
};

export default HomePage;
