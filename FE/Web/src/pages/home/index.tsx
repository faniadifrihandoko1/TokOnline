import BestProduct from "../../components/BestProduct";
import Carousel from "../../components/Carousel";
import Content from "../../components/Content";
import NewProduct from "../../components/NewProduct";
import StoryProduct from "../../components/StoryProduct";
import StyleRefferences from "../../components/StyleRefferences";

export default function Home() {
  return (
    <>
      <Carousel />
      <Content />
      <BestProduct />

      <StoryProduct />
      <NewProduct />
      <StyleRefferences />
    </>
  );
}
