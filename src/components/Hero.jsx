import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/Profile1.png";
import resume from "../assets/Md-Farhan-Resume.pdf";

import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-10 lg:pb-10 lg:text-8xl"
            >
              Mohd. Farhan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              onClick={() => {
                const link = document.createElement("a");
                link.href = { resume };
                link.download = "Dev_Farhan_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="flex items-center gap-3 p-3 mb-5 text-sm text-white border border-white rounded-md 
             bg-transparent 
             hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 
             hover:border-transparent"
            >
              Download Resume{" "}
              <span className="text-lg">
                <MdOutlineFileDownload />
              </span>
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-[400px]"
              src={profileImage}
              alt="Farhan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
