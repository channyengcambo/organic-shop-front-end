import PopularCategories from "../popular-category/PopularCategories";
import CustomerFeature from "./customer-feature/CustomerFeature";
import FlashSale from "./flash-sale/FlashSale";
import HeroComponent from "./hero/HeroComponent";
import PopularProduct from "./popular-product/PopularProduct";
import TopDeteal from "./hot-deal/HotDeteal";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <CustomerFeature />
      <PopularCategories />
      <PopularProduct />
      <FlashSale />
      <TopDeteal />
    </div>
  );
};

export default HomePage;
