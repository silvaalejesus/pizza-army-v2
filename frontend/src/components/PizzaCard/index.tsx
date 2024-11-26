const PizzaCard = ({ pizza }) => {
  const fotoUrl = pizza?.split(",");

  return (
    <div className="grid grid-cols-2 gap-6 w-[744px] h-full max-w-full">
      {fotoUrl?.map((url, index) => {
        return (
          <img
            key={index}
            src={url}
            className="rounded-lg object-cover w-[360px] h-[360px]"
          />
        );
      })}
    </div>
  );
};

export default PizzaCard;
