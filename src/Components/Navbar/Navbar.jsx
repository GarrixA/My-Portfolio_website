import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar h-28">
      {/* Navbar */}
      <Sidebar/>
      <div className="wrapper max-w-[85.375rem] flex items-center justify-between m-auto h-full">
        <motion.span
          animate={{
            opacity: [1, 0, 1],
            scale: [0, 0, 1]
           }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="uppercase font-bold"
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
