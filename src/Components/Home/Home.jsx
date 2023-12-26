import  "../../index.css";
import img1 from "../../images/profile.png";
import scroll from "../../../public/scroll.png";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 1400,
    },

    animate:{
        x: "-1450%",
        transition:{
            duration: 30,
            repeat: Infinity,
            repeatType:"loop",
            ease: "linear"
        },
    },
}


const Home = () => {
  return (
    <div className="home relative overflow-hidden -z-10">
      <div className="wrapper max-w-[85.375rem] h-full m-auto">
        <motion.div className="textContainer h-full flex flex-col justify-center gap-5 w-1/2" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 className="uppercase font-extrabold text-xl text-purple-700 tracking-[0.625rem]" variants={textVariants}>Aphrodis Uwineza</motion.h2>
          <motion.h1 className="text-7xl" variants={textVariants}>Web Developer and UI designer</motion.h1>
          <motion.div className="buttons space-x-5" variants={textVariants}>
            <motion.button className="p-4 border border-white border-solid rounded-xl cursor-pointer mt-5 font-semibold" variants={textVariants}>See My Latest work</motion.button>
            <motion.button className="p-4 border border-white border-solid rounded-xl cursor-pointer mt-5 font-semibold" variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src={scroll} alt="" className=" w-12" variants={textVariants} animate="scrollButton"/>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer w-1/2 font-bold absolute text-[60vh] bottom-[-2.5rem] whitespace-nowrap text-[#ffffff09] unselectable-text" variants={sliderVariants} initial="initial" animate="animate">
            UI/UX Designer and Web Developer
          </motion.div>
      <div className="imageContainer h-full absolute top-0 right-0">
        <img src={img1} alt="" className=" h-full" />
      </div>
    </div>
  );
};

export default Home;
