import Event from "./Event";

let am = [
  "oneAM",
  "twoAM",
  "threeAM",
  "fourAM",
  "fiveAM",
  "sixAM",
  "sevenAM",
  "eightAM",
  "nineAM",
  "tenAM",
  "elevenAM",
];
let pm = [
  "onePM",
  "twoPM",
  "threePM",
  "fourPM",
  "fivePM",
  "sixPM",
  "sevenPM",
  "eightPM",
  "ninePM",
  "tenPM",
  "elevenPM",
];
export default function EventsTimeline({
  taskMode,
  setEventSelected,
  eventSelected,
  date: { date },
  events,
  selectedDate,
}) {
  return (
    <>
      <div className="timeline">
        <Event
          taskMode={taskMode}
          setEventSelected={setEventSelected}
          time="twelveAM"
          key="twelveAM"
          events={events}
          selectedDate={selectedDate}
          className={
            eventSelected === "twelveAM"
              ? "event__body taskMode"
              : "event__body"
          }
        >
          12 AM
        </Event>
        {am.map((time, index) => (
          <Event
            taskMode={taskMode}
            setEventSelected={setEventSelected}
            time={time}
            key={time}
            events={events}
            selectedDate={selectedDate}
            className={
              eventSelected === time ? "event__body taskMode" : "event__body"
            }
          >
            {index + 1} AM
          </Event>
        ))}
        <Event
          taskMode={taskMode}
          setEventSelected={setEventSelected}
          time="twelvePM"
          events={events}
          selectedDate={selectedDate}
          className={
            eventSelected === "twelvePM"
              ? "event__body taskMode"
              : "event__body"
          }
        >
          12 PM
        </Event>
        {pm.map((time, index) => (
          <Event
            taskMode={taskMode}
            setEventSelected={setEventSelected}
            key={time}
            time={time}
            events={events}
            selectedDate={selectedDate}
            className={
              eventSelected === time ? "event__body taskMode" : "event__body"
            }
          >
            {index + 1} PM
          </Event>
        ))}
      </div>
    </>
  );
}
