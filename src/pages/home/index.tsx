import { motion, Variants } from "framer-motion";
import "./styles.scss";

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

const Home = () => {
  return (
    <div className="home__container">
      <motion.div
        className="home__content"
        variants={parentVariants}
        initial="hidden"
        animate="show"
      >
        <div className="letter">
          <motion.span variants={letterVariants}>P</motion.span>
        </div>
        <div className="letter">
          <motion.span variants={letterVariants}>A</motion.span>
        </div>
        <div className="letter">
          <motion.span variants={letterVariants}>T</motion.span>
        </div>
        <div className="letter">
          <motion.span variants={letterVariants}>X</motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
