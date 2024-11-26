import { createContext } from "react";

interface ICartContext {
  quantity: number;
  setQuantity: (quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  toggleCart: () => void;
  cartItems: any;
  setCartItems: (items: any) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
}
// Contexto para o carrinho
const CartContext = createContext<ICartContext>({
  quantity: 0,
  setQuantity: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  toggleCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  updateQuantity: () => {},
});

export default CartContext;
