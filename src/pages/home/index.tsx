import { AnimatePresence, motion, Variants } from "framer-motion";
import "./styles.scss";
import { useEffect, useMemo, useState } from "react";
import { ResetSvg } from "../../components/Svg/ResetSvg.tsx";

const parentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    left: -150,
  },
  show: {
    left: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

enum Modes {
  project = "project",
  aboutme = "aboutme",
  testimony = "testimony",
  experience = "experience",
}

const SmallLetters = ({
  mode,
  position,
  setMode,
}: {
  mode: Modes | undefined;
  position: "left" | "right";
  setMode: (mode: Modes) => void;
}) => {
  if (!mode) return null;
  return (
    <div className={`small__letter__container ${position}`}>
      <AnimatePresence>
        {mode !== Modes.project && position === "left" && (
          <motion.span
            key="p"
            onClick={() => setMode(Modes.project)}
            layoutId="layout_p"
            className="letter"
          >
            P
          </motion.span>
        )}
        {(((mode === Modes.testimony || mode === Modes.experience) &&
          position === "left") ||
          (mode === Modes.project && position === "right")) && (
          <motion.span
            key="a"
            onClick={() => setMode(Modes.aboutme)}
            layoutId="layout_a"
            className="letter"
          >
            A
          </motion.span>
        )}
        {(((mode === Modes.project || mode === Modes.aboutme) &&
          position === "right") ||
          (mode === Modes.experience && position === "left")) && (
          <motion.span
            key="t"
            onClick={() => setMode(Modes.testimony)}
            layoutId="layout_t"
            className="letter"
          >
            T
          </motion.span>
        )}
        {mode !== Modes.experience && position === "right" && (
          <motion.span
            key="x"
            onClick={() => setMode(Modes.experience)}
            layoutId="layout_x"
            className="letter"
          >
            X
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const [isReady, setIsReady] = useState(false);
  const [mode, setMode] = useState<Modes | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, (0.25 * 3 + 0.8) * 1000);
  }, []);

  const handleSetMode = (newMode: Modes) => setMode(newMode);

  const clearMode = () => setMode(undefined);

  const imageClassName = useMemo(() => {
    let className = "tilt__image ";
    switch (mode) {
      case Modes.project:
        className += "p";
        break;
      case Modes.aboutme:
        className += "a";
        break;
      case Modes.testimony:
        className += "t";
        break;
      case Modes.experience:
        className += "x";
        break;
      default:
        break;
    }

    return className;
  }, [mode]);

  return (
    <>
      <AnimatePresence>
        {mode === Modes.project && (
          <motion.div
            key="image_p"
            className={imageClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
          />
        )}
        {mode === Modes.aboutme && (
          <motion.div
            key="image_a"
            className={imageClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
          />
        )}
        {mode === Modes.testimony && (
          <motion.div
            key="image_t"
            className={imageClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
          />
        )}
        {mode === Modes.experience && (
          <motion.div
            key="image_x"
            className={imageClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="home__container">
        {mode && (
          <div className="reset__svg" onClick={clearMode}>
            <ResetSvg />
          </div>
        )}
        {isReady ? (
          <div className="home__content ready">
            <SmallLetters
              key="left"
              position="left"
              mode={mode}
              setMode={handleSetMode}
            />
            <div className="letter__container">
              <AnimatePresence>
                {(mode == null || mode === Modes.project) && (
                  <motion.div
                    layoutId="layout_p"
                    className="letter"
                    onClick={() => handleSetMode(Modes.project)}
                  >
                    P
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="letter__container">
              <AnimatePresence>
                {(mode == null || mode === Modes.aboutme) && (
                  <motion.div
                    layoutId="layout_a"
                    className="letter"
                    onClick={() => handleSetMode(Modes.aboutme)}
                  >
                    A
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="letter__container">
              <AnimatePresence>
                {(mode == null || mode === Modes.testimony) && (
                  <motion.div
                    layoutId="layout_t"
                    className="letter"
                    onClick={() => handleSetMode(Modes.testimony)}
                  >
                    T
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="letter__container">
              <AnimatePresence>
                {(mode == null || mode === Modes.experience) && (
                  <motion.div
                    layoutId="layout_x"
                    className="letter"
                    onClick={() => handleSetMode(Modes.experience)}
                  >
                    X
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <SmallLetters
              key="right"
              position="right"
              mode={mode}
              setMode={handleSetMode}
            />
          </div>
        ) : (
          <motion.div
            className="home__content"
            variants={parentVariants}
            initial="hidden"
            animate="show"
          >
            <div className="letter__container">
              <motion.div variants={letterVariants} className="letter__wrap">
                <div className="letter">P</div>
              </motion.div>
            </div>
            <div className="letter__container">
              <motion.div variants={letterVariants} className="letter__wrap">
                <div className="letter">A</div>
              </motion.div>
            </div>
            <div className="letter__container">
              <motion.div variants={letterVariants} className="letter__wrap">
                <div className="letter">T</div>
              </motion.div>
            </div>
            <div className="letter__container">
              <motion.div variants={letterVariants} className="letter__wrap">
                <div className="letter">X</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Home;
