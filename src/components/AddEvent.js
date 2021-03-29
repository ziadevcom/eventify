import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "./Input";
export default function AddEvent({
  addEventState,
  setAddEventState,
  events,
  addEvents,
  eventSelected,
  selectedDate,
}) {
  const [eventState, setEventState] = useState(null);
  useEffect(() => {
    if (!eventState) {
      return;
    }
    let eventsCopy = events;
    eventsCopy.push(eventState);
    localStorage.setItem("events", JSON.stringify(eventsCopy));
    addEvents(JSON.parse(localStorage.getItem("events")));
    setAddEventState("hidden");
  }, [eventState]);

  if (addEventState == "hidden") {
    return null;
  }
  return (
    <div className="input-wrapper animated fadeIn">
      <h1 className="greetings">Enter Required Info.</h1>
      <Input type="text" name="taskHeading" placeholder="Heading" />
      <Input
        type="text"
        name="taskURL"
        placeholder="Associated Link e.g (https://google.com)"
      />
      <Input
        name="taskDescription"
        placeholder="Description"
        cols="30"
        rows="10"
        type="textarea"
      ></Input>
      <small>At least heading is necessary. Description is optional.</small>
      <Input
        onClick={changeEventState}
        type="submit"
        className="btn"
        id="add-task"
        value="Add Task"
      />
      <span title="Go Back" onClick={hideAddEvent} className="closeIcon">
        ➲
      </span>
    </div>
  );
  function hideAddEvent() {
    setAddEventState("hidden");
  }
  function changeEventState(e) {
    let parent = e.target.parentElement.children;
    let taskHeading = parent[1].value;
    let taskURL = parent[2].value;
    let taskDescription = parent[3].value;
    if (taskHeading === "" || !taskHeading) {
      return (parent[1].style.border = "1px solid red");
    }
    let event = {
      id: uuidv4(),
      time: eventSelected,
      date: selectedDate,
      heading: taskHeading,
      url: taskURL !== "" ? taskURL : "#",
      description: taskDescription
        ? taskDescription
        : "No Description Provided",
    };
    setEventState(event);
  }
}
