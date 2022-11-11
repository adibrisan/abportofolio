import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialGithub,
} from "react-icons/ti";
import { GoMail } from "react-icons/go";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

const Header = ({}: Props) => {
  const [title] = useTypewriter({
    words: ["<adibrisan />"],
    loop: true,
    delaySpeed: 5000,
    typeSpeed: 100,
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("scrolled up");
  };

  return (
    <header className="flex items-start justify-between sticky p-5 top-0 max-w-7xl mx-auto xl:items-center z-30">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center content-center"
      >
        <span
          className="absolute -left-60 text-xl cursor-pointer hidden xl:inline-flex"
          onClick={scrollUp}
        >
          {title}
        </span>
        <Link
          className="pr-5"
          href="https://www.facebook.com/adi.brisan.9"
          target="_"
        >
          <TiSocialFacebook cursor="pointer" color="gray" size={30} />
        </Link>
        <Link
          className="pr-5"
          href="https://www.linkedin.com/in/adi-bri%C8%99an-96b8801a9/"
          target="_"
        >
          <TiSocialLinkedin cursor="pointer" color="gray" size={30} />
        </Link>
        <Link href="https://github.com/adibrisan" target="_">
          <TiSocialGithub cursor="pointer" color="gray" size={30} />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <GoMail color="gray" size={30} />
        <p className="ml-2 uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
