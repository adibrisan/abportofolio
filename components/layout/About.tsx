import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative px-10 smm:p-2 max-w-7xl h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] smm:tracking-[1px] text-sm sm:text-2xl text-cyan-200">
        {t("common:aboutTitle")}
      </h3>
      <motion.img
        className="-mb-0 xlm:mb-20 mt-8 flex-shrink-0 w-56 h-56 smm:w-[100px] smm:h-[100px] smm:mt-20 smm:rounded-full object-cover md:w-[500px] md:h-[300px] sm:rounded-lg"
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
      <div className="space-y-10 smm:space-y-0 px-0 md:px-10">
        <h4 className="text-4xl smm:text-base font-semibold">
          {t("common:summary_title")}&thinsp;
          <span className="underline decoration-[#66BFBF]">
            {t("common:little")}
          </span>
          &thinsp;{t("common:summary")}
        </h4>
        <p className="text-md smm:text-xs">
          {t("common:description1")}
          <span className="underline decoration-[#66BFBF]">@Endava</span>
          {t("common:description2")}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
