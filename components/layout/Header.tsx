import React from "react";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialGithub,
} from "react-icons/ti";
import { GoMail } from "react-icons/go";

import { motion } from "framer-motion";

type Props = {};

const Header = ({}: Props) => {
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
        <TiSocialFacebook color="gray" size={30} />
        <TiSocialLinkedin color="gray" size={30} />
        <TiSocialGithub color="gray" size={30} />
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
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
