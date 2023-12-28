/* eslint-disable react/prop-types */
import image from "../../images/Des 3.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import '../../index.scss'
const items = [
  {
    id: 1,
    title: "A hotel web 1",
    img: image,
    descri:
      "Discover a world of luxury and comfort at Garrix Hotel, where exceptional service meets contemporary elegance. Nestled in the heart of Kigali, our hotel is the perfect blend of sophistication and relaxation.",
  },
  {
    id: 2,
    title: "A hotel web 2",
    img: image,
    descri:
      "Discover a world of luxury and comfort at Garrix Hotel, where exceptional service meets contemporary elegance. Nestled in the heart of Kigali, our hotel is the perfect blend of sophistication and relaxation.",
  },
  {
    id: 3,
    title: "A hotel web 3",
    img: image,
    descri:
      "Discover a world of luxury and comfort at Garrix Hotel, where exceptional service meets contemporary elegance. Nestled in the heart of Kigali, our hotel is the perfect blend of sophistication and relaxation.",
  },
  {
    id: 4,
    title: "A hotel web 4",
    img: image,
    descri:
      "Discover a world of luxury and comfort at Garrix Hotel, where exceptional service meets contemporary elegance. Nestled in the heart of Kigali, our hotel is the perfect blend of sophistication and relaxation.",
  },
  {
    id: 5,
    title: "A hotel web 5",
    img: image,
    descri:
      "Discover a world of luxury and comfort at Garrix Hotel, where exceptional service meets contemporary elegance. Nestled in the heart of Kigali, our hotel is the perfect blend of sophistication and relaxation.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container flex items-center justify-center w-full h-full max-w-[85.375rem] m-auto -z-10">
        <div className="wrapper flex flex-col md:flex-row items-center justify-center w-full h-full max-w-[85.375rem] m-auto gap-2 md:gap-12 -z-10">
          <div className="imagContainer md:flex-1 md:max-h-[30rem] w-full max-h-[18.75rem] -z-10" ref={ref}>
            <img
              src={item.img}
              alt="image"
              className="h-full w-full md:object-cover object-contain -z-10"
            />
          </div>
          <motion.div
            className="textContainer md:flex-1 flex flex-col gap-2 md:gap-7 -z-10"
            style={{ y }}
          >
            <h2 className="text-[4.5rem] -z-10">{item.title}</h2>
            <p className="text-gray-600 text-[1.3rem] -z-10">{item.descri}</p>
            <button className="bg-[#f99e1b] p-1 w-40 md:p-2 md:w-52 rounded-lg text-[1.4rem] cursor-pointer -z-10">
              See demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio relative" ref={ref}>
      <div className="progress sticky top-0 left-0 pt-12 text-center text-[#f99e1b] text-[2.25rem] bg-[#0c0c1d] max-w-[85.375rem] m-auto -z-10">
        <h1>Featured works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-2 bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
