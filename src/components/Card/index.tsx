import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./style.scss";
import { clearCard } from "../../store/globalSlice.ts";
import { X } from "react-feather";

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
            opacity: 0,
          }}
        >
          <div className="card__title">
            <span>{activeCard.layoutId}</span>
            <div className="card__close" onClick={removeCard}>
              <X />
            </div>
          </div>
        </motion.div>
      )}
      {activeCard && (
        <motion.div
          key="backdrop"
          className="card__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
};

export default Card;
