import { createContext } from "react";
import { IPizza } from "../types/pizza";

const PizzaContext = createContext(
  {} as {
    selectedPizza: IPizza;
    setSelectedPizza: (pizza: IPizza) => void;
  }
);

export default PizzaContext;
