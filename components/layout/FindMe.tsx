import Image from "next/image";
import Link from "../core/Link";
import { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

const FindMe = (props: Props) => {
  useEffect(() => {
    const boxContainer = document.querySelector(".boxContainer");

    for (let i = 0; i < 365; i++) {
      const list = [
        0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166,
        167, 205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169,
        170, 210, 211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92,
        131, 132, 133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176,
        217, 177, 218, 259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260,
        261, 217, 218, 259, 260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99,
        100, 102, 103, 140, 141, 144, 181, 182, 185, 222, 223, 225, 226, 263,
        264, 265, 266, 304, 305, 306, 24, 25, 65, 66, 67, 106, 107, 108, 147,
        148, 149, 150, 188, 189, 229, 230, 270, 271, 311, 312, 67, 108, 149,
        150, 191, 232, 192, 233, 274, 234, 275, 316, 194, 235, 276, 154, 195,
        236, 73, 114, 155, 33, 34, 74, 75, 115, 116, 156, 157, 197, 198, 238,
        239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78, 79, 80, 118, 119, 159,
        160, 161, 162, 200, 201, 202, 203, 241, 242, 282, 283, 284, 285, 323,
        324, 325, 326,
      ];

      const el = document.createElement("div");

      // @ts-ignore: Unreachable code error
      el.classList = list.includes(i) ? "box active" : "box";
      boxContainer && boxContainer.appendChild(el);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative px-10 smm:p-2 max-w-7xl h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] smm:tracking-[1px] text-sm sm:text-2xl text-cyan-200">
        Find me on github
      </h3>
      <div className="githubContainer">
        <h1 className="githubTitle">Want to see all projects?</h1>
        <div className="githubChart">
          <div className="dates">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Agu</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
          <Link href="https://github.com/adibrisan" target="_">
            <div className="boxContainer" />
          </Link>
        </div>
        <div className="githubSm">
          <Image src="/img/github.png" alt="github" width={20} height={15} />
        </div>
        <Link href="https://github.com/adibrisan" target="_">
          <h2 className="pt-10 cursor-pointer lg:hidden text-3xl">
            Find Me on Github
          </h2>
        </Link>
      </div>
    </motion.div>
  );
};

export default FindMe;
