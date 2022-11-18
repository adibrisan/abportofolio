import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  percentage: number;
  language: string;
  img: string;
};

const Skill = ({ directionLeft, percentage, language, img }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-grey-200 object-cover w-24 h-24 2xlm:h-16 2xlm:w-16 xl:w-[80px] xl:h-[80px] filter group-hover:grayscale transition duration-400 ease-in-out"
        src={img}
        alt="skill"
      />
      <div className="absolute h-24 w-24 lgm:h-16 lgm:w-16 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-28 md:h-28 xl:w-[80px] xl:h-[80px] rounded-full z-0">
        <div className="h-full flex justify-center items-center">
          <p className="text-[10px] text-center font-bold text-black opacity-100">
            {percentage}%<span className="block">{language}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
