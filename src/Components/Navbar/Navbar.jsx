import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar h-28">
      {/* Navbar */}
      <Sidebar/>
      <div className="wrapper xl:max-w-[85.375rem]  flex items-center justify-end 2xl:justify-between m-6 2xl:m-auto 2xl:h-full h-[60%] md:justify-between md:mx-[8rem]">
        <motion.span
          animate={{
            opacity: [1, 0, 1],
            scale: [0, 0, 1]
           }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="uppercase font-bold md:flex hidden"
        >
          Garrix
        </motion.span>
        <div className="socials flex items-center gap-5">
          <img src="/facebook.png" alt="" className="h-5 w-5 cursor-pointer" />
          <img src="/instagram.png" alt="" className="h-5 w-5 cursor-pointer" />
          <img src="/youtube.png" alt="" className="h-5 w-5 cursor-pointer" />
          <img src="/dribbble.png" alt="" className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
