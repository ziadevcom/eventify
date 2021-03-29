import React from "react";
import SocialIcon from "./SocialIcon";

export default function Social() {
  return (
    <div id="social">
      <SocialIcon
        image={"/images/github.svg"}
        alt={"github profile"}
        href={"https://github.com/ziadevcom/"}
      />
      <SocialIcon
        image={"/images/twitter.svg"}
        alt={"twitter profile"}
        href={"https://twitter.com/IamZiaAhmad"}
      />
      <SocialIcon
        image={"/images/envelope.svg"}
        alt={"email me"}
        href={"mailto:ziaalich@gmail.com"}
      />
    </div>
  );
}
