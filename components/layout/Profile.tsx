import Image from "next/image";
import Link from "../core/Link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import ProfileComponent from "../custom/ProfileComponent";

type Props = {};

const Profile = (props: Props) => {
  const [title] = useTypewriter({
    words: [
      "Hi, my name is Adi Brisan",
      "<Guy-who-loves-Cars />",
      "<ButLikesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 4000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <ProfileComponent />
      <Image
        className="relative rounded-full h-32 w-32 object-cover"
        src="/profile/profile.jpeg"
        alt="profile photo"
        width={100}
        height={100}
        loading="lazy"
      />
      <div className="z-20">
        <h2 className="text-sm xl:text-lg tracking-[18px] smm:tracking-[1px] text-cyan-200 uppercase pb-5">
          Frontend Engineer
        </h2>
        <h1 className="text-lg lg:text-4xl font-semibold">
          <span className="smm:text-xs">{title}</span>
          <Cursor cursorColor="#66BFBF" />
        </h1>
        <div className="pt-10">
          <Link href="#about">
            <button className="button">About</button>
          </Link>
          <Link href="#experience">
            <button className="button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="button">Projects</button>
          </Link>
          <Link href="#findme">
            <button className="button">Github projects</button>
          </Link>
          <Link href="#contact">
            <button className="button">Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
