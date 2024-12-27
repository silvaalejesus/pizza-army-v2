import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const PizzaCard = ({ pizza }) => {
  const fotoUrl = pizza?.split(",");
  const [current, setCurrent] = useState(0);

  const paginate = (direction) => {
    setCurrent((prev) => {
      let newIndex = prev + direction;
      if (newIndex >= fotoUrl.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = fotoUrl.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <div className="relative w-[520px] h-[360px] max-w-full overflow-hidden">
      <AnimatePresence initial={false}>
        {fotoUrl.map((url, index) => (
          <motion.img
            key={index}
            src={url}
            className={`rounded-lg object-cover w-[360px] h-[360px] absolute transition-all duration-300 ease-in-out ${
              index === current
                ? "left-0 z-10"
                : index === (current + 1) % fotoUrl.length
                ? "left-[200px] z-0"
                : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default PizzaCard;
