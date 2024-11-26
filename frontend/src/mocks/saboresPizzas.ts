import pizza from "../../src/assets/desktop/pexels-brett-desktop.png";
import pexels_kristina from "../../src/assets/desktop/pexels-kristina-desktop.png";

interface PizzaProps {
  name: string;
  image: string[];
  description: string;
  price: number;
  ingredients?: string[];
}

export const mockPizzas: PizzaProps[] = [
  {
    name: "Marguerita",
    image: [pizza, pizza, pexels_kristina, pizza],
    description:
      "Crosta fina, molho de tomate fresco, queijo mozzarella derretido e manjericão aromático, uma combinação clássica e irresistível.",
    price: 70.23,
  },
  {
    name: "Calabresa",
    image: [pexels_kristina, pexels_kristina, pexels_kristina, pizza],
    description:
      "Crosta fina, molho de tomate fresco, queijo mozzarella derretido e manjericão aromático, uma combinação clássica e irresistível.",
    price: 89.9,
  },
  {
    name: "Chocolate",
    image: [pizza, pexels_kristina, pizza],
    description:
      "Crosta fina, molho de tomate fresco, queijo mozzarella derretido e manjericão aromático, uma combinação clássica e irresistível.",
    price: 49.5,
  },
  {
    name: "Queijo",
    image: [pizza],
    description:
      "Crosta fina, molho de tomate fresco, queijo mozzarella derretido e manjericão aromático, uma combinação clássica e irresistível.",
    price: 25.0,
  },
];
