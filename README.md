# react-booking-calendly 📅

A React component for booking and scheduling available time slots with ease. `react-booking-calendly` lets you display a calendar with available and reserved times for booking, providing a clean and customizable interface.

## Installation

Install the package via npm:

```bash
npm install react-booking-calendly
```

or with yarn:

```bash
yarn add react-booking-calendly
```

## Usage

To use `react-booking-calendly`, import and use the main component in your application.

### Example

```javascript
import { useState } from "react";
import BookingCalendar from "react-booking-calendly";

const App = () => { 
  const [isClicked, setIsClicked] = useState(false);

  // Handle submission of booking data
  const onSubmitHandler = (data) => {
    setIsClicked(true);
    console.log("Booking Data:", data);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };

  // Define available time slots by day of the week
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

  // Define reserved slots with specific dates and times
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
      interval={1} // Time interval between available slots (in hours)
      onSubmitHandler={onSubmitHandler}
      isClicked={isClicked}
      primaryColor={"#008000"} // Customize color
      buttonTitle={"Book"}
    />
  );
};

export default App;
```

### Props

The `BookingCalendar` component accepts the following props:

| Prop             | Type          | Description                                                                                           |
|------------------|---------------|-------------------------------------------------------------------------------------------------------|
| `availabilities` | `array`       | An array of objects defining available times by day of the week.                                      |
| `reserveSlots`   | `array`       | An array of objects defining reserved times with specific dates.                                      |
| `interval`       | `number`      | The interval between time slots (in hours).                                                           |
| `onSubmitHandler`| `function`    | Callback function triggered when a user clicks the "Book" button. Receives booking details.          |
| `isClicked`      | `boolean`     | Tracks button click state for UX feedback (e.g., loading or confirmation).                           |
| `primaryColor`   | `string`      | Customize the primary color of the calendar and time slots.                                          |
| `buttonTitle`    | `string`      | Customize the button text shown to users (e.g., "Book", "Reserve").                                  |

### Callback Data

When the user selects a time slot and clicks the booking button, `onSubmitHandler` returns booking data with the following format:

```javascript
{
  startingTime: "6:00PM",
  endingTime: "7:00PM",
  date: "2024-11-06",
  timeZone: "America/New_York"
}
```

### Example Response

```javascript
{
  startingTime: "6:00PM",
  endingTime: "8:00PM",
  date: "2024-11-06",
  timeZone: "America/New_York"
}
```

## Customization

- **Colors**: Use the `primaryColor` prop to set the calendar's main color (e.g., "#008000").
- **Button Title**: Set `buttonTitle` to change the text displayed on the booking button.

## Dependencies

- `moment`: This package is used for time management and formatting.

## License

MIT