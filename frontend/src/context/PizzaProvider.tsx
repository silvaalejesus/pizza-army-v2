import { useEffect, useState } from "react";
import { useAxios } from "../hook/useAxios";
import PizzaContext from "./PizzaContext";

const PizzaProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPizza, setSelectedPizza] = useState([]);

  const { response, loading, error } = useAxios({
    method: "GET",
    url: "flavors",
  });

  useEffect(() => {
    if (!loading) setSelectedPizza(response[0]);
  }, [loading, response]);

  const value = {
    selectedPizza,
    setSelectedPizza,
  };

  return (
    <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
  );
};

export default PizzaProvider;
