import { motion } from "framer-motion";

import ProjectCard from "../custom/ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex flex-col text-left md:flex-row w-full justify-evenly mx-auto items-center overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-200 text-2xl smm:tracking-[1px] smm:text-xs smm:top-12 mdm:top-8">
        Projects
      </h3>

      <div className="relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <ProjectCard index={0} isVideo />
        <ProjectCard
          index={1}
          link="https://next-pizza-restaurant-tau.vercel.app/"
        />
      </div>

      <div className="absolute w-full h-[500px] top-[30%] bg-gray-900/50 left-0 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
