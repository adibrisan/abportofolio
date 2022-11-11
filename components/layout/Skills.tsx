import { motion } from "framer-motion";

import Skill from "../custom/Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative h-screen flex flex-col justify-center items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-sm md:text-2xl text-cyan-200">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to see level percentage
      </h3>
      <div className="grid sm:grid-cols-4 sm:gap-5 grid-cols-2 gap-2">
        <Skill directionLeft />
        <Skill />
        <Skill directionLeft />
        <Skill />
        <Skill directionLeft />
        <Skill />
        <Skill directionLeft />
        <Skill />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill />
        <Skill directionLeft />
      </div>
    </motion.div>
  );
};

export default Skills;
