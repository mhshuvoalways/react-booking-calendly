import BookingCalendar from "./BookingCalendar";

const App = () => {
  const onBookingSubmit = (data) => {
    console.log(data);
  };

  const availabilities = [
    {
      day: "Thursday",
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

  const reservedSlots = [
    {
      date: "2024-11-07",
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
      reservedSlots={reservedSlots}
      interval={1}
      onBookingSubmit={onBookingSubmit}
      primaryColor={"#008000"}
      buttonLabel={"Book"}
    />
  );
};

export default App;
