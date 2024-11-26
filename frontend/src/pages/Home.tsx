import Cart from "../components/Cart/index.tsx";
import Header from "../components/Header/index.tsx";
import Review from "../components/Review/index.tsx";
import SelectPizza from "../components/SelectPizza/index.tsx";

const Home = () => {
  return (
    <div>
      <Header />
      <SelectPizza />
      <Review />
      <Cart />
    </div>
  );
};

export default Home;
