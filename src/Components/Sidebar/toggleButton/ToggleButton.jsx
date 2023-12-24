/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ToggleButton = ({ toggleOpen }) => {
  return (
    <button
      onClick={toggleOpen}
      className="fixed w-14 h-14 rounded-full top-5 left-5 bg-transparent border-none space-y-[0.29rem]"
    >
      <motion.svg
        height="5"
        width="50"
        className="rounded"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.path
          d="M10 0 L10 200 L250 0 "
          variants={{
            closed: {
              opacity: 1,
            },
            open: {
              opacity: 1,
              translateX: 30,
              transition: {
                type: "spring",
                stiffness: 20,
            }
            },
          }}
        />
      </motion.svg>

      <motion.svg
        height="5"
        width="50"
        className="rounded"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.path
          d="M10 0 L10 200 L250 0 "
          variants={{
            closed: { opacity: 1 },
            open: { 
                opacity: 1, 
                translateX: 20,
                transition: {
                    type: "spring",
                    stiffness: 20,
                } 
            },
          }}
        />
      </motion.svg>

      <motion.svg
        height="5"
        width="50"
        className="rounded"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.path
          d="M10 0 L10 200 L250 0 "
          variants={{
            closed: { opacity: 1 },
            open: { 
                opacity: 1, 
                translateX: 10,
                transition: {
                    type: "spring",
                    stiffness: 20,
                }
             },
          }}
        />
      </motion.svg>
    </button>
  );
};

export default ToggleButton;
