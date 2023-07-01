import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  generateBallInitialX,
  generateBallInitialY,
  generateRandomColor,
  getRandomInteger,
  getRandomSign,
  isOutOfRangeX,
  isOutOfRangeY,
  Position,
} from "../../utils.ts";
import { useInterval } from "react-use";
import "./style.scss";
import { applyCard } from "../../store/globalSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hooks";

interface BallProps {
  dimension: number; // in pixel
  layoutId: string;
  delay?: number; // in second
}

const Ball = ({ dimension, layoutId, delay = 0 }: BallProps) => {
  const delayRef = useRef(delay * 1000);
  const colorRef = useRef(generateRandomColor());
  const x = useMotionValue(generateBallInitialX());
  const y = useMotionValue(generateBallInitialY());
  const xSmooth = useSpring(x, { damping: 50, stiffness: 500 });
  const ySmooth = useSpring(y, { damping: 50, stiffness: 500 });
  const [visible, setVisible] = useState(false);
  const [dragged, setDragged] = useState(false);

  const dispatch = useAppDispatch();
  const previousCard = useAppSelector((s) => s.global.previousCard);
  const activeCard = useAppSelector((s) => s.global.activeCard);

  // ball moving direction
  const directionRef = useRef<Position>({
    x: getRandomSign() * getRandomInteger(5, 10),
    y: getRandomSign() * getRandomInteger(5, 10),
  });

  const applyLayout = () => {
    setVisible(false);
    dispatch(
      applyCard({
        layoutId,
        dimension,
        backgroundColor: colorRef.current,
      })
    );
  };

  const check = () => {
    const isOutOfRange =
      isOutOfRangeX(dimension * 2, xSmooth.get()) ||
      isOutOfRangeY(dimension * 2, ySmooth.get());

    if (isOutOfRange) {
      setVisible(false);
    }
  };

  const move = () => {
    check();
    x.set(x.get() + directionRef.current?.x);
    y.set(y.get() + directionRef.current?.y);
  };

  const replacement = () => {
    x.jump(generateBallInitialX());
    y.jump(generateBallInitialY());
    setTimeout(() => {
      setVisible(true);
      setDragged(false);
    }, 1000);
  };

  useEffect(() => {
    if (delayRef.current) {
      setTimeout(() => {
        setVisible(true);
        delayRef.current = 0;
      }, delayRef.current);
      return;
    } else {
      if (visible) {
        directionRef.current = {
          x: getRandomSign() * getRandomInteger(5, 10),
          y: getRandomSign() * getRandomInteger(5, 10),
        };
      } else if (!visible && activeCard?.layoutId !== layoutId) {
        replacement();
      }
    }
  }, [visible]);

  useEffect(() => {
    if (previousCard?.layoutId === layoutId) {
      replacement();
    }
  }, [previousCard, layoutId]);

  useInterval(check, 5000);

  useInterval(move, visible && !dragged ? 100 : null);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          drag
          layoutId={layoutId}
          layout="preserve-aspect"
          onDrag={() => setDragged(true)}
          className="ball__container"
          style={{
            x: xSmooth,
            y: ySmooth,
            width: dimension,
            height: dimension,
            zIndex: getRandomInteger(0, 100),
            backgroundColor: colorRef.current,
          }}
          onClick={applyLayout}
        />
      )}
    </AnimatePresence>
  );
};

export default Ball;
