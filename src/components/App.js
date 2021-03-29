import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Social from "./Social";
import Calendar from "./Calendar";
import Events from "./Events";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import Greetings from "./Greetings";
import EventBody from "./EventBody";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const App = () => {
  const [date, setDate] = useState({
    date: new Date(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [taskMode, setTaskMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, addEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  return (
    <Router>
      <Social />
      <Calendar>
        <Greetings date={date} months={months}></Greetings>
        <div id="calendar">
          <CalendarHeader
            setDate={setDate}
            date={date}
            months={months}
          ></CalendarHeader>
          <CalendarBody
            events={events}
            date={date}
            months={months}
            setDate={setDate}
            setTaskMode={setTaskMode}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </Calendar>
      <Switch>
        <Route exact path="/">
          <Events
            events={events}
            addEvents={addEvents}
            date={date}
            months={months}
            taskMode={taskMode}
            selectedDate={selectedDate}
          />
        </Route>
        <Route path="/:eventID">
          <EventBody events={events} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
