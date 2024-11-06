import { useState } from "react";
import BookingCalendar from "./BookingCalendar";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onSubmitHandler = (data) => {
    setIsClicked(true);
    console.log(data);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };

  const availabilities = [
    {
      day: "Wednesday",
      time: [
        {
          startingTime: "1:00AM",
          endingTime: "7:00AM",
        },
      ],
    },
    {
      day: "Monday",
      time: [
        {
          startingTime: "6:00PM",
          endingTime: "8:00PM",
        },
      ],
    },
  ];

  const reserveSlots = [
    {
      date: "2024-11-06",
      startingTime: "1:15AM",
      endingTime: "2:15AM",
    },
    {
      date: "2024-11-11",
      startingTime: "6:30PM",
      endingTime: "7:30PM",
    },
  ];

  return (
    <BookingCalendar
      availabilities={availabilities}
      reserveSlots={reserveSlots}
      interval={1}
      onSubmitHandler={onSubmitHandler}
      isClicked={isClicked}
      primaryColor={"#008000"}
      buttonTitle={"Book"}
    />
  );
};

export default App;
