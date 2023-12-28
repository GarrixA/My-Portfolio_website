import { useState } from "react"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"
import MyLinks from "./Links/MyLinks";
const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = ()=>{
        setOpen(!open)
    }
    

  return (
    <motion.div className="sidebar z-40 flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
        <motion.div className="bg fixed top-0 left-0 bottom-0 w-full md:w-[18rem] bg-white z-99-" variants={variants}>
           <MyLinks toggleOpen={toggleOpen}/>
        </motion.div>
        <ToggleButton toggleOpen={toggleOpen}/>
    </motion.div>
  )
}

export default Sidebar
