import DateDIV from "./DateDIV";
export default function CalendarBody({
  date: { date, year, month },
  months,
  setDate,
  setTaskMode,
  events,
  selectedDate,
  setSelectedDate,
}) {
  const dates = getDatesArray();
  return (
    <div className="calendar__body">
      <div className="weekdays">
        <div className="weekend">Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div className="weekend">Sat</div>
      </div>
      <div className="days">
        {/*  Dates rendering */}
        {dates.map(({ date, title, className }) => {
          const hasDate = events.some((event) => {
            return event.date == date;
          });
          let classNames;
          if (
            hasDate &&
            new Date(date).toLocaleDateString() ==
              new Date().toLocaleDateString()
          ) {
            classNames = classNames = className + " hasTasks today";
          } else if (
            new Date(date).toLocaleDateString() ==
            new Date().toLocaleDateString()
          ) {
            classNames = className + " today";
          } else if (hasDate) {
            classNames = className + " hasTasks";
          } else {
            classNames = className;
          }
          return (
            <DateDIV
              key={date}
              className={classNames}
              date={date}
              setDate={setDate}
              setTaskMode={setTaskMode}
              setSelectedDate={setSelectedDate}
              dataSelected={selectedDate == date ? true : null}
            >
              {title}
            </DateDIV>
          );
        })}
      </div>
    </div>
  );
  function getDatesArray() {
    const previousMonthDates = getPreviousMonthDates();
    const currentMonthDates = getCurrentMonthDates();
    const nextMonthDates = getNextMonthDates();
    function getPreviousMonthDates() {
      const previousMonthLastDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
      const previousMonthDaysCount = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      ).getDay();
      let previousMonthDates = (function () {
        let arr = [];
        for (let i = 1; i <= previousMonthLastDate; i++) {
          arr.push({
            title: i,
            className: "not-date",
            date: `${i}-${months[month - 1]}-${year}`,
          });
        }
        return arr;
      })();
      const previousMonthDatesArr = previousMonthDates.slice(
        previousMonthDaysCount * -1
      );
      return previousMonthDatesArr;
    }
    function getCurrentMonthDates() {
      let currentMonthDaysCount = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      let arr = [];
      for (let i = 1; i <= currentMonthDaysCount; i++) {
        arr.push({
          title: i,
          className: "date",
          date: `${i}-${months[month]}-${year}`,
        });
      }
      return arr;
    }
    function getNextMonthDates() {
      const IndexOfLastDayOfCurrentMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();
      const nextMonthDaysCount = 7 - IndexOfLastDayOfCurrentMonth;
      let arr = [];
      for (let i = 1; i < nextMonthDaysCount; i++) {
        arr.push({
          title: i,
          className: "not-date",
          date: `${i}-${months[month + 1]}-${year}`,
        });
      }
      return arr;
    }
    const dates = previousMonthDates
      .concat(currentMonthDates)
      .concat(nextMonthDates);
    return dates;
  }
}
