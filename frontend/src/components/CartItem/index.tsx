import { useContext } from "react";
import add from "../../assets/icons/add_item.svg";
import pizza from "../../assets/icons/icon_pizza_cart.png";
import remove from "../../assets/icons/remove_item.svg";
import CartContext from "../../context/CartContext";

const CartItem = ({ data }) => {
  const { id, flavor, price, size, slices, quantity } = data;
  const { setCartItems, cartItems, updateQuantity } = useContext(CartContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  const handleIncrement = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const subtotal = (quantity * price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="px-4">
      <div className="flex gap-4">
        <img src={pizza} width={72} height={72} alt="" />
        <div className="w-full">
          <h4 className="uppercase font-bold font-display tracking-wider">
            {flavor}
          </h4>
          <p className="font-light">
            {size} - {slices} fatias
          </p>
          <p className="font-light">{subtotal}</p>
        </div>

        <div className="flex flex-col justify-between items-end">
          <button onClick={handleRemoveItem}>X</button>
          <div className="flex gap-2">
            <button onClick={handleDecrement} className="w-6 h-6">
              <img src={remove} alt="" />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement} className="w-6 h-6">
              <img src={add} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
