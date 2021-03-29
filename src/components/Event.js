import Tasks from "./Tasks";

export default function Event({
  time,
  children,
  taskMode,
  setEventSelected,
  className,
  events,
  selectedDate,
}) {
  if (!taskMode) {
    setEventSelected(null);
  }
  const tasks = events.filter((event) => {
    return event.time == time && event.date == selectedDate;
  });
  return (
    <div className="event" time={time}>
      <div className="event-header">{children}</div>
      <div onClick={onClickTimeline} className={className}>
        {tasks.map((task) => {
          if (task.time == time) {
            return <Tasks {...task} key={task.heading} />;
          }
        })}
      </div>
    </div>
  );
  function onClickTimeline(e) {
    const elem = e.target;
    if (!taskMode) {
      return console.log("Select a date to add task to.");
    }
    if (elem.classList.contains("taskMode")) {
      setEventSelected(null);
    } else {
      setEventSelected(elem.parentElement.getAttribute("time"));
    }
  }
}
