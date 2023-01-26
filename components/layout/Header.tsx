import Link from "next/link";
import { VscFilePdf } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { useTranslation } from "next-i18next";
import { Facebook, Linkedin, GitHub } from "react-feather";

type Props = {};

const Header = ({}: Props) => {
  const { t } = useTranslation();

  const fileUrl = "/cv/Adrian-Alexandru_Brisan_Resume.pdf";

  const [title] = useTypewriter({
    words: ["<adibrisan />"],
    loop: true,
    delaySpeed: 5000,
    typeSpeed: 100,
  });

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
        <span className="absolute -left-60 text-xl hidden 3xl:inline-flex">
          {title}
        </span>
        <Link
          className="pr-5"
          href="https://www.facebook.com/adi.brisan.9"
          target="_"
        >
          <Facebook className="hover:stroke-white" color="gray" size={23} />
        </Link>
        <Link
          className="pr-5"
          href="https://www.linkedin.com/in/adi-bri%C8%99an-96b8801a9/"
          target="_"
        >
          <Linkedin className="hover:stroke-white" color="gray" size={23} />
        </Link>
        <Link href="https://github.com/adibrisan" target="_">
          <GitHub className="hover:stroke-white" color="gray" size={23} />
        </Link>
      </motion.div>
      <Link href={fileUrl} target="_" rel="noopener noreferrer">
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
          className="flex items-center text-gray-300 cursor-pointer mdm:flex-col hover:underline decoration-cyan-200"
        >
          <VscFilePdf color="gray" size={30} />
          <p className="ml-2 uppercase hidden md:inline-flex text-sm text-gray-400">
            {t("common:cv")}
          </p>
          <span className="mt-1 uppercase text-sm text-gray-400 md:hidden">
            CV
          </span>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
