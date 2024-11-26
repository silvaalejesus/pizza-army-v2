import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCartItems((prevCartItems: any) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const value = {
    quantity,
    setQuantity,
    isCartOpen,
    setIsCartOpen,
    toggleCart,
    cartItems,
    setCartItems,
    updateQuantity,
  };

  // <CartContext
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
