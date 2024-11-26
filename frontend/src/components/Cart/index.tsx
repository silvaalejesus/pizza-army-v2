import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem";
import { CartResume } from "../CartResume";
import styles from "./style.module.css";

const Cart = () => {
  const { cartItems, isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <section
      className={`${styles.cart}  ${
        isCartOpen ? "block translate-x-0" : "hidden translate-x-full"
      } `}
    >
      <header className="flex py-4 justify-center">
        <p className="uppercase font-display tracking-widest	 text-green text-xl">
          carrinho
        </p>
        <button onClick={toggleCart}>X</button>
      </header>
      <div className={`${styles.cart_items}`}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className={`${styles.cart_resume} w-full px-4`}>
        <CartResume />
      </div>
    </section>
  );
};

export default Cart;
