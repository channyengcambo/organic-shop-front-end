import PopularCategories from "../popular-category/PopularCategories";
import CustomerFeature from "./customer-feature/CustomerFeature";
import FlashSale from "./flash-sale/FlashSale";
import HeroComponent from "./hero/HeroComponent";
import PopularProduct from "./popular-product/PopularProduct";
import TopDeteal from "./hot-deal/HotDeteal";
import EventSale from "./event-sale/EventSale";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <CustomerFeature />
      <PopularCategories />
      <PopularProduct />
      <FlashSale />
      <TopDeteal />
      <EventSale />
    </div>
  );
};

export default HomePage;
