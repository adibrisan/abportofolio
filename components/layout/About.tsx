import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative px-10 max-w-7xl h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-sm md:text-2xl  text-cyan-200">
        About
      </h3>
      <motion.img
        className="-mb-0 md:mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover xl:w-[500px] xl:h-[300px] md:rounded-lg md:w-64 md:h-96"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/profile/aboutphoto.jpeg"
        alt="about_photo"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#66BFBF]">little</span> summary
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          assumenda enim autem accusamus reprehenderit quos temporibus aliquam
          deleniti, doloribus corrupti in ipsum at, veritatis quod. Voluptate
          omnis neque doloribus maxime.
        </p>
      </div>
    </div>
  );
};

export default About;
