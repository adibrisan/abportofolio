import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center overflow-hidden z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-cyan-200 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <motion.div
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={index}
            className=".content-container w-screen flex flex-col flex-shrink-0 p-20 justify-center items-center space-y-5 m-auto md:p-44"
          >
            <Image
              src="https://thumbs.dreamstime.com/z/laptop-smartphone-tablet-pc-mockup-set-modern-technology-devices-template-responsive-design-presentation-consist-55856779.jpg"
              alt="project"
              width={800}
              height={30}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center mdm:text-sm">
                <span className="underline decoration-cyan-200/70">
                  Project {index + 1}
                </span>
                :&ensp;NextJS Pizza Restaurant
              </h4>
              <p className="text-lg text-center smm:hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                excepturi explicabo consectetur eaque consequuntur amet minus
                corrupti quibusdam, et deserunt quia quasi suscipit, laudantium
                alias illo! Hic reprehenderit fuga quas!
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute w-full h-[500px] top-[30%] bg-gray-900/50 left-0 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
