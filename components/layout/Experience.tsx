import { motion } from "framer-motion";

import ExpCard from "../custom/ExpCard";

import { softSrc, endavaSrc, summarySoft, summaryEndava } from "../../consts";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative px-10 h-screen flex flex-col justify-evenly items-center text-left md:flex-row max-w-full mx-auto overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] smm:tracking-[1px] text-sm md:text-2xl text-cyan-200">
        Experience
      </h3>
      <div className="w-full p-10 flex space-x-5 overflow-x-scroll snap-x snap-mandatory">
        <ExpCard
          title="React / React Native developer"
          company="SoftState Technologies"
          date="09/2021 - 05/2022"
          summary={summarySoft}
          srcArr={softSrc}
        />
        <ExpCard
          title="ReactJS developer"
          company="Endava"
          date="05/2022 - 11/2022"
          summary={summaryEndava}
          srcArr={endavaSrc}
        />
      </div>
    </motion.div>
  );
};

export default Experience;
