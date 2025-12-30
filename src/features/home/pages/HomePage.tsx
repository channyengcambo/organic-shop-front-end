import PopularCategories from "../popular-category/PopularCategories";
import CustomerFeature from "./customer-feature/CustomerFeature";
import HeroComponent from "./hero/HeroComponent";
import PopularProduct from "./popular-product/PopularProduct";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <CustomerFeature />
      <PopularCategories />
      <PopularProduct />
    </div>
  );
};

export default HomePage;
