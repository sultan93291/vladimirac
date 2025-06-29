import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="p-4">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}
