import "./parallax.scss";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <>
      <div
        className="parallax w-full h-full relative flex items-center justify-center overflow-hidden"
        ref={ref}
        style={{
          background:
            type === "Services"
              ? "linear-gradient(180deg, #111132, #0c0c1d)"
              : "linear-gradient(180deg, #111132, #505064)",
        }}
      >
        <motion.h1 style={{ 
            y: yText,
            userSelect: "none"
             }}>
          {type === "Services" ? "What We Do" : "What We Did"}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{ 
            y: yBg,
            backgroundImage: `url(${type==="Services" ? "/planets.png" : "/sun.png"})` 
            }} className="planets"></motion.div>
        <motion.div style={{ x: xBg }} className="stars"></motion.div>
      </div>
    </>
  );
};

Parallax.propTypes = {
  type: PropTypes.oneOf(["Services", "OtherType"]).isRequired,
};

export default Parallax;
