import React from "react";
import { Link, useParams } from "react-router-dom";
export default function EventBody({ events }) {
  let { eventID } = useParams();

  const event = events.find((event) => {
    return event.id == eventID;
  });

  return (
    <div id="eventBody" className="animated fadeIn">
      <Link to="/">
        <span title="Go Back" className="closeIcon">
          ➲
        </span>
      </Link>
      <small>{`Due Time: ${new Date(event.date).toDateString()}`}</small>
      <h1 className="greeting">{event.heading}</h1>
      <p>{event.description}</p>

      <a
        className="eventOuterLink"
        href={`//${event.url}`}
        rel="noreferrer"
        target="_blank"
        style={{ fontFamily: "var(--comfortaa)" }}
      >
        Related Link
      </a>
    </div>
  );
}
