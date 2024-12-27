import { useContext } from "react";
import check from "../../assets/icons/check_green.svg";
import star from "../../assets/icons/star.svg";
import CartContext from "../../context/CartContext";
import PizzaContext from "../../context/PizzaContext";
import { useAxios } from "../../hook/useAxios";
import ButtonCounter from "../ButtonCounter";
import PizzaCard from "../PizzaCard";
import styles from "./styles.module.css";

const PizzaSection = () => {
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "flavors",
  });

  const { setQuantity, cartItems, setCartItems, quantity, toggleCart } =
    useContext(CartContext);

  const { selectedPizza, setSelectedPizza } = useContext(PizzaContext);
  const handlePizzaSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPizzaName = event.target.value;
    // console.log("selectedPizzaName", selectedPizzaName);
    const selectedPizzaObject = response?.find(
      (pizza) => pizza.flavor === selectedPizzaName
    );
    // console.log("selectedPizzaObject", selectedPizzaObject);
    setSelectedPizza(selectedPizzaObject);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    handleAddCart(selectedPizza, quantity);
    toggleCart();
    setQuantity(1); // Reseta a quantidade após adicionar ao carrinho
  };

  const handleAddCart = (pizza, quantity) => {
    const existingItem = cartItems.find((item) => item.flavor === pizza.flavor);

    if (existingItem) {
      // Se a pizza já está no carrinho, incrementa a quantidade
      setCartItems(
        cartItems.map((item) =>
          item.flavor === pizza.flavor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Se a pizza não está no carrinho, adiciona um novo item
      setCartItems([...cartItems, { ...pizza, quantity: quantity }]);
    }
  };

  const characteristicsArray = selectedPizza?.characteristics?.split(", ");
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<img src={star} alt="" />);
  }
  return (
    <>
      <section className={styles.section_container}>
        <div className="max-w-[744px]">
          <PizzaCard pizza={selectedPizza.fotoUrl} />
        </div>
        {/* section lateral -informações da pizza selecionada*/}
        <div className="mt-6 ml-12 w-full">
          <div className="flex justify-between">
            <h1 className="uppercase font-display font-bold text-3xl tracking-widest">
              {selectedPizza.flavor}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex">{stars}</div>
              <span className="uppercase font-bold text-golden-orange">
                42 Avaliações
              </span>
            </div>
          </div>
          <p className="font-light text-dark-brown tracking-wider my-3">
            {selectedPizza.description}
          </p>

          {/* selecionar sabor */}
          <form className={styles.custom_select}>
            <label htmlFor="sabores">Sabor</label>
            <select id="sabores" onChange={handlePizzaSelect}>
              {response?.map((pizza, index) => (
                <option key={index} value={pizza.flavor}>
                  {pizza.flavor}
                </option>
              ))}
            </select>
          </form>

          <ButtonCounter
            data={selectedPizza}
            quantity={quantity} // Passa a quantidade como prop
            setQuantity={setQuantity}
          />

          <button className={styles.button_add_cart} onClick={handleAddToCart}>
            Adicionar ao carrinho
          </button>

          <div>
            {characteristicsArray?.map((item, index) => {
              return (
                <ul key={index} className="flex flex-col gap-4">
                  <li>
                    <img src={check} alt="icon check" />
                    <span>{item}</span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PizzaSection;
