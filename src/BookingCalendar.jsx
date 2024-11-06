import moment from "moment";
import { useEffect, useState } from "react";
import Calendly from "./components/calender";
import Time from "./components/calender/Time";
import getTimeSlots from "./utils/getTimeSlots";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const BookTutor = ({
  availabilities,
  reserveSlots,
  interval,
  onSubmitHandler,
  isClicked,
  primaryColor,
}) => {
  const [selectedDate, setSelectedDate] = useState();

  const dateHandler = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    dateHandler(new Date());
  }, []);

  const getAvailibility = () => {
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    return availabilities.find((av) => av.day === days[dayOfWeek]);
  };

  const getReserveSlots = () => {
    return reserveSlots.filter(
      (slot) =>
        moment(slot.date).format("YYYY-MM-DD") ===
        moment(selectedDate).format("YYYY-MM-DD")
    );
  };

  const getFinalResults = () => {
    if (selectedDate && getAvailibility()) {
      return getTimeSlots(getAvailibility().time, getReserveSlots(), interval);
    } else {
      return [];
    }
  };

  const submitHander = (startingTime, endingTime) => {
    onSubmitHandler({
      startingTime,
      endingTime,
      date: selectedDate,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  };

  return (
    <div className="booking-calendar">
      <Calendly dateHandler={dateHandler} primaryColor={primaryColor} />
      {getFinalResults().length ? (
        getFinalResults().map((el, index) => (
          <Time
            key={index}
            timeSlots={el}
            submitHander={submitHander}
            isClicked={isClicked}
            primaryColor={primaryColor}
          />
        ))
      ) : (
        <p className="booking-not-available">Not available</p>
      )}
    </div>
  );
};

export default BookTutor;
