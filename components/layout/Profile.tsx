import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Profile = (props: Props) => {
  const [title, countTitle] = useTypewriter({
    words: [
      "Hi, my name is Adi Brisan",
      "<Guy-who-loves-Cars />",
      "<ButLikesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 4000,
  });

  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Profile;
