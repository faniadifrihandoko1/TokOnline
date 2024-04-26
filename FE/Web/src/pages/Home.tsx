import BestProduct from "../components/BestProduct";
import Carousel from "../components/Carousel";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Content />
      <BestProduct />
    </>
  );
}
