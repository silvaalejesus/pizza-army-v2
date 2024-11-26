import { useContext } from "react";
import add from "../../assets/icons/add_item.svg";
import remove from "../../assets/icons/remove_item.svg";
import PizzaContext from "../../context/PizzaContext";

const ButtonCounter = ({ data, quantity, setQuantity }) => {
  const { selectedPizza } = useContext(PizzaContext);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subtotal = (quantity * selectedPizza.price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  console.log("subtotal", subtotal);

  return (
    <div className="flex pl-4 pt-6 pb-2 justify-between">
      <div className="flex gap-3 items-center">
        <button onClick={handleDecrement}>
          <img src={remove} alt="" />
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>
          <img src={add} alt="" />
        </button>
      </div>
      <span className="font-light">
        Subtotal: <span className="font-bold">{subtotal}</span>
      </span>
    </div>
  );
};

export default ButtonCounter;
