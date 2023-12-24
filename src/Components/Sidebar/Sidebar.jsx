import { useState } from "react"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"
import MyLinks from "./Links/MyLinks";


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = ()=>{
        setOpen(!open)
    }
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

  return (
    <motion.div className="sidebar flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
        <motion.div className="bg fixed top-0 left-0 bottom-0 w-[18rem] bg-white" variants={variants}>
           <MyLinks/>
        </motion.div>
        <ToggleButton toggleOpen={toggleOpen}/>
    </motion.div>
  )
}

export default Sidebar
