import { DiCss3, DiHtml5, DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity, // Corrected this line
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <DiHtml5 className="text-7xl text-orange-500" />{" "}
          {/* HTML5 - Orange */}
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <DiCss3 className="text-7xl text-blue-500" /> {/* CSS3 - Blue */}
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <DiJavascript className="text-7xl text-yellow-500" />{" "}
          {/* JavaScript - Yellow */}
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <RiReactjsLine className="text-7xl text-blue-400" />{" "}
          {/* React - Blue */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <TbBrandNextjs className="text-7xl" /> {/* Next.js - Black */}
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <SiMongodb className="text-7xl text-green-600" />{" "}
          {/* MongoDB - Green */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <FaNodeJs className="text-7xl text-green-500" />{" "}
          {/* Node.js - Green */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
