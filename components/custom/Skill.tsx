import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-grey-200 object-cover w-24 h-24 2xlm:h-16 2xlm:w-16 xl:w-[80px] xl:h-[80px] filter group-hover:grayscale transition duration-400 ease-in-out"
        src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
        alt="skill"
      />
      <div className="absolute h-24 w-24 lgm:h-16 lgm:w-16 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-28 md:h-28 xl:w-[80px] xl:h-[80px] rounded-full z-0">
        <div className="h-full flex justify-center items-center">
          <p className="text-sm font-bold text-black opacity-100">
            100%<span className="block">JavaScript</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
