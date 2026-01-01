import PopularCategories from "./popular-category/PopularCategories";
import CustomerFeature from "./customer-feature/CustomerFeature";
import FlashSale from "./flash-sale/FlashSale";
import HeroComponent from "./hero/HeroComponent";
import TopDeteal from "./hot-deal/HotDeteal";
import EventSale from "./event-sale/EventSale";
import FeatureProduct from "./feature-product/FeatureProduct";
import LatestNews from "../../blog/pages/latest-news/LatestNews";
import PopularProduct from "@/features/products/pages/popular-product/PopularProduct";
import ClientTestimonials from "@/features/client-testimonials/pages/ClientTestimonials";

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
      <FeatureProduct />
      <LatestNews />
      <ClientTestimonials />
    </div>
  );
};

export default HomePage;
