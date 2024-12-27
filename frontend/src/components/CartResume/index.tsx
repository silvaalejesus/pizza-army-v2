import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./style.module.css";

export const CartResume = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const formattedTotalPrice = totalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.details}>
          <span>Produtos</span>
          <span>{formattedTotalPrice}</span>
        </div>
        <div className={styles.details}>
          <span>Frete</span>
          <span>Grátis</span>
        </div>
        <div className={styles.details}>
          <span className="font-bold">Total</span>
          <span className="font-bold">{formattedTotalPrice}</span>
        </div>
      </div>
      <button className={styles.button}>Finalizar pedido</button>
    </>
  );
};
