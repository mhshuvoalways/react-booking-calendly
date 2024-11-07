import Button from "./Button";

const Time = ({ timeSlot, onSubmit, buttonLabel, primaryColor }) => {
  return (
    <div className="booking-time">
      <div className="booking-time-flex">
        <p className="booking-time-time">{timeSlot.startingTime}</p>
        <p>-</p>
        <p className="booking-time-time">{timeSlot.endingTime}</p>
      </div>
      <div className="booking-time-button">
        <Button
          title={buttonLabel}
          primaryColor={primaryColor}
          onClick={() => onSubmit(timeSlot.startingTime, timeSlot.endingTime)}
        />
      </div>
    </div>
  );
};

export default Time;
