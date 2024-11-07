import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import TimeSlot from "./components/TimeSlot";
import getTimeSlots from "./utils/getTimeSlots";

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const BookingCalendar = ({
  availabilities,
  reservedSlots,
  interval,
  onBookingSubmit,
  primaryColor,
  buttonLabel,
}) => {
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    handleDateChange(new Date());
  }, []);

  const getDailyAvailability = () => {
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    return availabilities.find(
      (availability) => availability.day === DAYS_OF_WEEK[dayOfWeek]
    );
  };

  const getDailyReservedSlots = () => {
    return reservedSlots.filter(
      (slot) =>
        moment(slot.date).format("YYYY-MM-DD") ===
        moment(selectedDate).format("YYYY-MM-DD")
    );
  };

  const getAvailableTimeSlots = () => {
    const dailyAvailability = getDailyAvailability();
    if (selectedDate && dailyAvailability) {
      return getTimeSlots(
        dailyAvailability.time,
        getDailyReservedSlots(),
        interval
      );
    }
    return [];
  };

  const handleBookingSubmit = (startTime, endTime) => {
    onBookingSubmit({
      startTime,
      endTime,
      date: selectedDate,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  };

  return (
    <div className="booking-calendar">
      <Calendar
        onDateChange={handleDateChange}
        primaryColor={primaryColor}
      />
      {getAvailableTimeSlots().length ? (
        getAvailableTimeSlots().map((timeSlot, index) => (
          <TimeSlot
            key={index}
            timeSlot={timeSlot}
            onSubmit={handleBookingSubmit}
            buttonLabel={buttonLabel}
            primaryColor={primaryColor}
          />
        ))
      ) : (
        <p className="booking-not-available">Not available</p>
      )}
    </div>
  );
};

export default BookingCalendar;
