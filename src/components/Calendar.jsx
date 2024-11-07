import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ onDateChange, primaryColor }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const handlePrevMonth = () => {
    if (
      currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() === today.getMonth()
    ) {
      return;
    }
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      if (
        newDate.getFullYear() === today.getFullYear() &&
        newDate.getMonth() === today.getMonth() &&
        newDate.getDate() < today.getDate()
      ) {
        return;
      }
      setSelectedDate(newDate);
      onDateChange(newDate);
    }
  };

  const days = generateCalendar();

  return (
    <>
      <div className="booking-calendar-top">
        <ArrowLeft
          className="booking-calendar-top-arrow"
          onClick={handlePrevMonth}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e2e8f0")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        />
        <p style={{ fontWeight: 500 }}>
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <ArrowRight
          className="booking-calendar-top-arrow"
          onClick={handleNextMonth}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e2e8f0")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        />
      </div>
      <div className="booking-calendar-day">
        {DAYS_OF_WEEK.map((day) => (
          <p key={day} style={{ fontWeight: 500 }}>
            {day}
          </p>
        ))}
        {days.map((day, index) => (
          <p
            key={index}
            className="booking-calendar-date"
            style={{
              backgroundColor:
                (selectedDate &&
                  day === selectedDate.getDate() &&
                  currentDate.getMonth() === selectedDate.getMonth() &&
                  currentDate.getFullYear() === selectedDate.getFullYear()) ||
                (!selectedDate &&
                  day === today.getDate() &&
                  currentDate.getMonth() === today.getMonth() &&
                  currentDate.getFullYear() === today.getFullYear())
                  ? primaryColor
                  : "transparent",
              color:
                (selectedDate &&
                  day === selectedDate.getDate() &&
                  currentDate.getMonth() === selectedDate.getMonth() &&
                  currentDate.getFullYear() === selectedDate.getFullYear()) ||
                (!selectedDate &&
                  day === today.getDate() &&
                  currentDate.getMonth() === today.getMonth() &&
                  currentDate.getFullYear() === today.getFullYear())
                  ? "#ffffff"
                  : "inherit",
              opacity:
                currentDate.getFullYear() === today.getFullYear() &&
                currentDate.getMonth() === today.getMonth() &&
                day &&
                day < today.getDate()
                  ? 0.5
                  : 1,
            }}
            onClick={() => handleDateClick(day)}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                day !== today.getDate() ? "#e2e8f0" : "")
            }
            onMouseOut={(e) => {
              if (!(selectedDate && day === selectedDate.getDate())) {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            {day}
          </p>
        ))}
      </div>
    </>
  );
};

export default Calendar;
