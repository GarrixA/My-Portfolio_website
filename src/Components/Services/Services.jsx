import { motion } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 40,
    },
  },
};

const cardVariant = {
  initial: {
    x: -100,
    y: -10,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 3,
    transition: {
      duration: 3,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services flex flex-col justify-between h-full"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="textContainer mt-[4rem] md:mt-0 flex flex-col md:flex-row text-center self-center md:self-end flex-[1] items-center gap-5"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <p className="font-200 text-gray-400 text-lg leading-normal text-right">
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr className=" w-[20rem] md:w-[15.25rem] border-t border-solid border-gray-400" />
      </motion.div>
      <motion.div
        className="titleContainer flex-[2] flex flex-col items-center w-full mt-[4rem]"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title flex gap-7 md:mt-0 mt-24 md:gap-12 items-center flex-col md:flex-row text-center">
          <div className="rounded-[3.125rem] h-[6.25rem] w-[18.75em] overflow-hidden">
            <motion.img
              whileHover={{
                scale: 1.5,
                background: "gray",
                transition: {
                  ease: "easeOut",
                  duration: 2,
                },
              }}
              src="/people.webp"
              alt=""
              className="rounded-[3.125rem] h-[5.25rem] md:h-[6.25rem] w-[18.75em] object-cover"
            />
          </div>
          <h1 className="text-[2rem] md:text-[4rem] font-thin">
            <motion.b whileHover={{ color: "#f99e1b" }} className="font-bold">
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title flex gap-4 md:gap-12 items-center flex-col md:flex-row text-center">
          <h1 className="text-[2rem] md:text-[4rem] font-thin">
            <motion.b whileHover={{ color: "#f99e1b" }} className="font-bold">
              For Your
            </motion.b>{" "}
            Business
          </h1>
          <button className="text-black w-[10rem] md:w-[15rem] h-[2.25rem] md:h-[4.25rem] rounded-[3.125rem] bg-[#f99e1b] cursor-pointer border-none text-[1rem] font-bold md:text-2xl">
            What I Do?
          </button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer flex-[2] flex flex-col md:flex-row max-w-[85.375rem] m-auto  space-y-1 md:gap-0 mt-[4rem] gap-[4em] items-center"
        variants={cardVariant}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="box p-10 border border-s-gray-500 flex flex-col justify-between md:w-full w-[80%]"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.2,
            transition: {
              duration: 2,
            },
          }}
        >
          <h2 className="p-1 mb-5 text-xl font-bold">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio
            voluptate placeat illum similique quo atque aperiam perspiciatis
            porro voluptatum ut corrupti unde eum tenetur delectus, cupiditate
            dolore cum quas! Molestias voluptas ipsa enim culpa officiis
          </p>
          <button className=" p-1 mt-5 bg-[#f99e1b] border-none rounded text-xl font-bold text-black cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="box p-10 border border-s-gray-500 flex flex-col justify-between md:w-full w-[80%]"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.2,
            transition: {
              duration: 2,
            },
          }}
          variants={cardVariant}
          initial="initial"
          whileInView="animate"
        >
          <h2 className="p-1 mb-5 text-xl font-bold">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio
            voluptate placeat illum similique quo atque aperiam perspiciatis
            porro voluptatum ut corrupti unde eum tenetur delectus, cupiditate
            dolore cum quas! Molestias voluptas ipsa enim culpa officiis
          </p>
          <button className=" p-1 mt-5 bg-[#f99e1b] border-none rounded text-xl font-bold text-black cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="box p-10 border border-s-gray-500 flex flex-col justify-between md:w-full w-[80%]"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.2,
            transition: {
              duration: 2,
            },
          }}
        >
          <h2 className="p-1 mb-5 text-xl font-bold">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio
            voluptate placeat illum similique quo atque aperiam perspiciatis
            porro voluptatum ut corrupti unde eum tenetur delectus, cupiditate
            dolore cum quas! Molestias voluptas ipsa enim culpa officiis
          </p>
          <button className=" p-1 mt-5 bg-[#f99e1b] border-none rounded text-xl font-bold text-black cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="box p-10 border border-s-gray-500 flex flex-col justify-between md:w-full w-[80%]"
          variants={cardVariant}
          initial="initial"
          whileInView="animate"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.2,
            transition: {
              duration: 2,
            },
          }}
        >
          <h2 className="p-1 mb-5 text-xl font-bold ">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio
            voluptate placeat illum similique quo atque aperiam perspiciatis
            porro voluptatum ut corrupti unde eum tenetur delectus, cupiditate
            dolore cum quas! Molestias voluptas ipsa enim culpa officiis
          </p>
          <button className=" p-1 mt-5 bg-[#f99e1b] border-none rounded text-xl font-bold text-black cursor-pointer">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
