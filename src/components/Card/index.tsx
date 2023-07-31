import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./style.scss";
import { clearCard } from "../../store/globalSlice.ts";
import { useMemo } from "react";

const Card = () => {
  const activeCard = useAppSelector((s) => s.global.activeCard);
  const events = useAppSelector((s) => s.eventState.events);
  const dispatch = useAppDispatch();

  const activeEvent = useMemo(() => {
    return events.find((event) => event.id === activeCard?.layoutId);
  }, [activeCard?.layoutId]);

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
            backgroundImage: activeCard.backgroundImage,
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}
        >
          <div className="card__title">
            <span>{activeEvent?.name}</span>
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
          onClick={removeCard}
        />
      )}
    </AnimatePresence>
  );
};

export default Card;
