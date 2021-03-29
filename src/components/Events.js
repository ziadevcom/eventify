import { React, useState } from "react";
import EventsHeader from "./EventsHeader";
import EventsTimeline from "./EventsTimeline";
import AddEvent from "./AddEvent";

export default function Events({
  taskMode,
  date,
  months,
  events,
  addEvents,
  selectedDate,
}) {
  const [eventSelected, setEventSelected] = useState(null);
  const [addEventState, setAddEventState] = useState("hidden");
  return (
    <div
      id="events"
      className={
        addEventState == "show" ? "events--addEventStateActive" : "fadeIn"
      }
    >
      <EventsHeader
        months={months}
        date={date}
        eventSelected={eventSelected}
        setAddEventState={setAddEventState}
      />
      <EventsTimeline
        events={events}
        date={date}
        taskMode={taskMode}
        eventSelected={eventSelected}
        setEventSelected={setEventSelected}
        selectedDate={selectedDate}
      />
      <AddEvent
        eventSelected={eventSelected}
        setAddEventState={setAddEventState}
        addEventState={addEventState}
        setEventSelected={setEventSelected}
        events={events}
        addEvents={addEvents}
        selectedDate={selectedDate}
      />
    </div>
  );
}
