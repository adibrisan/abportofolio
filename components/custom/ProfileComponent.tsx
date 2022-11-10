import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ProfileComponent = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.5, 0.3, 0.4, 0.8, 0.5, 0.3],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute h-[200px] w-[200px] mt-52 border border-[#F9F2ED] rounded-full animate-ping" />
      <div className="absolute rounded-full border border-[#F9F2ED] h-[300px] w-[300px] mt-52" />
      <div className="absolute rounded-full border border-[#F9F2ED] h-[500px] w-[500px] mt-52" />
      <div className="absolute rounded-full border border-[#F5DF99] opacity-10 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute rounded-full border border-[#F9F2ED] h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
};

export default ProfileComponent;
