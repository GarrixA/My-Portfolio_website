/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 50,
    opacity: 0,
  },
};

const MyLinks = ({toggleOpen}) => {
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-5 text-[1.8rem] md:text-[1.5rem]"
      variants={variants}
    >
      {items.map((item) => {
        return (
          <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.3}} whileTap={{scale: 0.95}} onClick={toggleOpen}>
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default MyLinks;
