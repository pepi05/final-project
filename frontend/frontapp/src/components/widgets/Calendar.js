import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../assets/styles/calendar.css"
import "react-datepicker/dist/react-datepicker.css";


const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="inputCal" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
export default Calendar;