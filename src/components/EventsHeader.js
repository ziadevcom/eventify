export default function EventsHeader({
  eventSelected,
  setAddEventState,
  months,
  date: { date, year, month },
}) {
  return (
    <div className="header">
      <div className="current-date">
        <h2>{`${date.getDate()} ${months[month]} ${year}`}</h2>
      </div>
      <button
        disabled={typeof eventSelected == "string" ? false : true}
        onClick={onClickAddEvent}
        className="add-new-event"
      >
        + Create
      </button>
    </div>
  );
  function onClickAddEvent() {
    setAddEventState("show");
  }
}
