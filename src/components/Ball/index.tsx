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

interface BallProps {
  dimension: number;
}

const Ball = ({ dimension }: BallProps) => {
  const x = useMotionValue(generateBallInitialX());
  const y = useMotionValue(generateBallInitialY());
  const xSmooth = useSpring(x, { damping: 50, stiffness: 200 });
  const ySmooth = useSpring(y, { damping: 50, stiffness: 200 });
  const [visible, setVisible] = useState(true);
  const [dragged, setDragged] = useState(false);

  // ball moving direction
  const directionRef = useRef<Position>({
    x: getRandomSign() * getRandomInteger(5, 10),
    y: getRandomSign() * getRandomInteger(5, 10),
  });

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

  useEffect(() => {
    if (visible) {
      directionRef.current = {
        x: getRandomSign() * getRandomInteger(5, 10),
        y: getRandomSign() * getRandomInteger(5, 10),
      };
    } else {
      x.jump(generateBallInitialX());
      y.jump(generateBallInitialY());
      setTimeout(() => {
        setVisible(true);
        setDragged(false);
      }, 1000);
    }
  }, [visible]);

  useInterval(check, 5000);

  useInterval(move, visible && !dragged ? 100 : null);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          drag
          onDrag={() => setDragged(true)}
          className="ball__container"
          style={{
            x: xSmooth,
            y: ySmooth,
            width: dimension,
            height: dimension,
            zIndex: getRandomInteger(0, 100),
            backgroundColor: generateRandomColor(),
          }}
        />
      ) : null}
    </AnimatePresence>
  );
};

export default Ball;
