/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ToggleButton = ({ toggleOpen }) => {
  return (
    <button
      onClick={toggleOpen}
      className="fixed w-14 h-14 rounded-full top-6 left-8 bg-transparent border-none z-999"
    >
      <svg
        width="35"
        height="35"
        viewBox="0 0 23 23"
      >
        <motion.path stroke="black" strokeWidth="3" strokeLinecap="round" 
          variants={{
            closed: {d: "M 2 2.5 L 20 2.5"},
            open: {d: "M 3 16.5 L 17 2.5"},
          }}
        />
        <motion.path stroke="black" strokeWidth="3" strokeLinecap="round" 
        d="M 2 9.423 L 20 9.423"
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0},
          }}
        />
        <motion.path stroke="black" strokeWidth="3" strokeLinecap="round" 
          variants={{
            closed: {d: "M 2 16.346 L 20 16.346"},
            open: {
              d: "M 3 2.5 L 17 16.346",
            },
          }}
        />
      </svg>
      {/* <motion.svg
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
      </motion.svg> */}
    </button>
  );
};

export default ToggleButton;
