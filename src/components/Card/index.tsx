import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./style.scss";
import { clearCard } from "../../store/globalSlice.ts";

const Card = () => {
  const activeCard = useAppSelector((s) => s.global.activeCard);
  const dispatch = useAppDispatch();

  const removeCard = () => dispatch(clearCard());

  return (
    <AnimatePresence>
      {activeCard && (
        <motion.div
          layout="preserve-aspect"
          layoutId={activeCard.layoutId}
          className="card__container"
          initial={{
            width: activeCard.dimension,
            height: activeCard.dimension,
          }}
          animate={{
            width: 800,
            height: 333,
          }}
          style={{
            backgroundColor: activeCard.backgroundColor,
          }}
          exit={{
            scale: 0,
          }}
        >
          <div className="card__title">
            <span>{activeCard.layoutId}</span>
            <div onClick={removeCard}>X</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Card;
