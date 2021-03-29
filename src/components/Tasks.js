import React from "react";
import { Link } from "react-router-dom";
let colors = [
  {
    color: "#00203F",
    backgroundColor: "#ADF0D1",
  },
  {
    color: "#C0A4D4",
    backgroundColor: "#F9EDFF",
  },
  {
    color: "#3B0F50",
    backgroundColor: "#DA6285",
  },
  {
    color: "#E3A27F",
    backgroundColor: "#FFF2ED",
  },
  {
    color: "#59295D",
    backgroundColor: "#A05DA5",
  },
  {
    color: "#8C9ED0",
    backgroundColor: "#F1F6FF",
  },
  {
    color: "#8C9ED0",
    backgroundColor: "#F1F6FF",
  },
  {
    color: "#C1A1D3",
    backgroundColor: "#FFF3E6",
  },
  {
    color: "#6A492B",
    backgroundColor: "#F88F01",
  },
  {
    color: "#7AB9B3",
    backgroundColor: "#E8FBFC",
  },
  {
    color: "#153e90",
    backgroundColor: "#54e346",
  },
];
export default function Tasks({ id, heading, description, url }) {
  let styles = colors[random(0, colors.length - 1)];
  return (
    <Link to={id}>
      <span
        className="animated bounceInDown"
        description={description}
        link={url}
        style={styles}
      >
        {heading}
      </span>
    </Link>
  );
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
