import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

import Link from "../core/Link";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Props {
  index: number;
  isVideo?: boolean;
  link?: string;
}

const ProjectCard = ({ index, isVideo, link }: Props) => {
  return (
    <motion.div
      initial={{
        y: -300,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      key={index}
      className="w-screen flex flex-col flex-shrink-0 p-20 justify-center items-center space-y-5 m-auto md:p-44"
    >
      {isVideo ? (
        <>
          <ReactPlayer
            loop
            playing
            muted
            controls
            url="/videos/demo_license.mp4"
          />
          <Image
            style={{
              position: "absolute",
              left: "50.8%",
              top: "38.9%",
              transform: `translate(-50%,-50%)`,
              zIndex: 100,
            }}
            src="/img/phone.png"
            alt="project"
            width={188}
            height={26}
          />
        </>
      ) : (
        <div className="relative">
          <div
            style={{
              width: "100%",
              position: "absolute",
              left: "61.5%",
              top: "34.7%",
              transform: `translate(-50%,-50%)`,
            }}
            className="absolute"
          >
            <Link href={link ? link : ""} target="_">
              <Image
                src="/img/pizza-project.png"
                alt="pizza_project"
                width={502}
                height={500}
              />
            </Link>
          </div>
          <div className="xlm:opacity-0">
            <Link href={link ? link : ""} target="_">
              <Image
                src="/img/projects-laptop.png"
                alt="project"
                width={670}
                height={15}
                sizes="(max-width: 368px) 100vw"
                // layout="responsive"
              />
            </Link>
          </div>
        </div>
      )}
      {isVideo ? (
        <div className="space-y-0 px-0 md:px-1 max-w-6xl lg:space-y-5">
          <h4 className="mt-[50px] lg:text-2xl text-md font-semibold text-center mdm:text-sm">
            <span className="underline decoration-cyan-200/70">
              Project {index + 1}
            </span>
            :&ensp;React Native app - Econominator
          </h4>
          <p className="text-sm xl:text-lg text-center smm:hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            excepturi explicabo consectetur eaque consequuntur amet minus
            corrupti quibusdam, et deserunt quia quasi suscipit, laudantium
            alias illo! Hic reprehenderit fuga quas!
          </p>
        </div>
      ) : (
        <div className="px-0 md:px-1 max-w-6xl">
          <h4 className="lg:text-2xl text-md font-semibold text-center mdm:text-sm">
            <span className="underline decoration-cyan-200/70">
              Project {index + 1}
            </span>
            :&ensp;React Native app - Econominator
          </h4>
          <p className="text-sm xl:text-lg text-center smm:hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            excepturi explicabo consectetur eaque consequuntur amet minus
            corrupti quibusdam, et deserunt quia quasi suscipit, laudantium
            alias illo! Hic reprehenderit fuga quas!
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
