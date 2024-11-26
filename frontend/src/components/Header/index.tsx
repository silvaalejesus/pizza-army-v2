import { useContext } from "react";
import expand_more from "../../assets/icons/expand_more_black.svg";
import person from "../../assets/icons/person_black.svg";
import shopping_cart from "../../assets/icons/shopping_cart_black.svg";
import CartContext from "../../context/CartContext";

const Header = () => {
  const { toggleCart } = useContext(CartContext);

  return (
    <div className="container flex mx-auto items-center justify-between py-6">
      <div className="flex items-center">
        <p className="font-medium">Comprar</p>
        <button>
          <img src={expand_more} alt="expand more" />
        </button>
      </div>

      <h1 className="uppercase text-green font-bold text-2xl font-display tracking-widest">
        pizza army
      </h1>

      <div className="flex gap-10">
        <div>
          <p className="font-medium">
            A segunda pizza com
            <span className="text-green text-sm uppercase"> 20% OFF</span>
          </p>
        </div>

        <div className="flex gap-6">
          <img src={person} alt="perfil" />
          <button onClick={toggleCart}>
            <img src={shopping_cart} alt="carrinho" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
