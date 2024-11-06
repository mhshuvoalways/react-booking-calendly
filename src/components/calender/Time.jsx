import Button from "../Button";

const Time = ({ timeSlots, submitHander, isClicked, primaryColor }) => {
  return (
    <div className="booking-time">
      <div className="booking-time-flex">
        <p className="booking-time-time">{timeSlots.startingTime}</p>
        <p>-</p>
        <p className="booking-time-time">{timeSlots.endingTime}</p>
      </div>
      <div className="booking-time-button">
        <Button
          title={"Book"}
          isClicked={isClicked}
          icon={true}
          primaryColor={primaryColor}
          onClick={() =>
            submitHander(timeSlots.startingTime, timeSlots.endingTime)
          }
        />
      </div>
    </div>
  );
};

export default Time;
