import pizza_desktop from "../../assets/desktop/pizza-desktop.png";
import icon_pizza from "../../assets/icons/local_pizza_black.svg";
import verified from "../../assets/icons/verified_red.svg";
import { avaliacoes } from "../../mocks/avaliacaoDosCliente";

const Review = () => {
  const properties = [
    { text: "Queijos importados" },
    { text: "Catupiry de primeira qualidade" },
    { text: "Bastante recheio" },
    { text: "Forno à lenha" },
  ];

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="uppercase text-5xl font-bold font-display tracking-widest">
            DESCUBRA O SABOR DA TRADIÇÃO
          </h1>
          <p className="font-light text-base">
            Com receitas transmitidas à gerações, ingredientes selecionados e
            forno a lenha, garantimos uma experiência gastronômica memorável.
          </p>
        </div>
        <div className="flex items-center w-full relative">
          <div className="flex w-full">
            <img className="max-w-md z-50" src={pizza_desktop} alt="pizza" />

            <div className="relative right-[10%] w-full">
              {properties.map((property, index) => (
                <div className="border-b-2 border-light-gray pb-4 mt-8 ">
                  <div className="flex ml-[25%] gap-2">
                    <img src={icon_pizza} alt="" />
                    <p className="font-bold">{property.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* avaliacoes dos consumidores*/}
      <div className="flex justify-between my-16 ">
        {avaliacoes.map((avaliacao, index) => (
          <div key={index} className="flex flex-col items-center gap-3 w-[30%]">
            <div className="flex">
              <img src={avaliacao.estrelas} />
            </div>
            <p className="text-center font-light ">{avaliacao.avaliacao}</p>
            <div className="flex gap-1">
              <img src={verified} />
              <p className="font-bold">
                {avaliacao.consumidor} - consumidor verificado
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
