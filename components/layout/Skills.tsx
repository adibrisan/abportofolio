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
      <h3 className="absolute top-[460px] sm:top-8 uppercase tracking-[20px] smm:tracking-[1px] text-sm md:text-2xl text-cyan-200">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm xlm:hidden">
        Hover over a skill to see level percentage
      </h3>
      <div className="grid sm:gap-5 grid-cols-4 gap-2 mb-[100px]">
        <Skill
          percentage={80}
          language="JavaScript"
          img="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
          directionLeft
        />
        <Skill
          percentage={70}
          language="TypeScript"
          img="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
        />
        <Skill
          percentage={90}
          language="React"
          img="https://cdn-icons-png.flaticon.com/128/753/753244.png"
          directionLeft
        />
        <Skill
          percentage={80}
          language="SCSS"
          img="https://cdn-icons-png.flaticon.com/128/919/919831.png"
        />
        <Skill
          percentage={100}
          language="HTML5"
          img="https://cdn-icons-png.flaticon.com/128/174/174854.png"
          directionLeft
        />
        <Skill
          percentage={75}
          language="CSS3"
          img="https://cdn-icons-png.flaticon.com/128/732/732190.png"
        />
        <Skill
          percentage={75}
          language="styled-components"
          img="https://cdn-icons-png.flaticon.com/128/599/599368.png"
          directionLeft
        />
        <Skill
          percentage={75}
          language="NodeJS"
          img="https://cdn-icons-png.flaticon.com/128/919/919825.png"
        />
        <Skill
          percentage={75}
          language="MongoDB"
          img="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"
          directionLeft
        />
      </div>
    </motion.div>
  );
};

export default Skills;
