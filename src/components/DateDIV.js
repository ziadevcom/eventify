export default function DateDIV({
  date,
  className,
  setDate,
  children,
  setTaskMode,
  setSelectedDate,
  dataSelected,
}) {
  return (
    <div
      onClick={onClickDate}
      date={date}
      className={className}
      data-selected={dataSelected}
    >
      {children}
    </div>
  );
  function onClickDate(e) {
    const element = e.target;
    let date = element.getAttribute("date");
    let dateOBJ = {
      date: new Date(date),
      month: new Date(date).getMonth(),
      year: new Date(date).getFullYear(),
    };
    if (element.getAttribute("data-selected")) {
      setTaskMode(false);
      setSelectedDate(null);
      return;
    }
    if (new Date(date).getDate() < new Date().getDate()) {
      setTaskMode(false);
      setDate(dateOBJ);
      setSelectedDate(date);
      return;
    }
    setSelectedDate(date);
    setDate(dateOBJ);
    setTaskMode(true);
  }
}
