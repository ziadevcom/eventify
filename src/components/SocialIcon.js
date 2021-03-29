import React from "react";

export default function SocialIcon({ href, alt, image }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} />
    </a>
  );
}
