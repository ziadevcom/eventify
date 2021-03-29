import CalendarButton from "./CalendarControls";
export default function CalendarHeader({
  months,
  date: { date, year, month },
  setDate,
}) {
  return (
    <div className="calendar__header">
      <div className="month">{`${months[month]} ${year}`}</div>
      <div className="navigation">
        <CalendarButton
          onClick={() =>
            setDate({
              date: new Date(),
              month: new Date().getMonth(),
              year: new Date().getFullYear(),
            })
          }
          className="reset"
          title="Current Month"
          icon=">"
        />
        <CalendarButton
          onClick={() =>
            setDate({
              date: new Date(date.setMonth(date.getMonth() - 1)),
              month: date.getMonth(),
              year: date.getFullYear(),
            })
          }
          className="previous"
          title="Previous Month"
          icon="<"
        />
        <CalendarButton
          onClick={() =>
            setDate({
              date: new Date(date.setMonth(date.getMonth() + 1)),
              month: date.getMonth(),
              year: date.getFullYear(),
            })
          }
          className="next"
          title="Next Month Month"
          icon=">"
        />
      </div>
    </div>
  );
}
