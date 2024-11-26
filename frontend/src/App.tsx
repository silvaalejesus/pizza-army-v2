import "./App.css";
import CartProvider from "./context/CartProvider";
import PizzaProvider from "./context/PizzaProvider";
import Home from "./pages/Home";

function App() {
  return (
    <PizzaProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </PizzaProvider>
  );
}

export default App;
