import MoveRight from "../assets/arrow-right-long.svg";

const Button1 = ({ title, onClick, primaryColor }) => {
  return (
    <button
      className="booking-btn"
      style={{
        backgroundColor: primaryColor,
      }}
      onClick={onClick}
    >
      {title}
      <img src={MoveRight} alt="arrow icon" className="booking-btn-icon" />
    </button>
  );
};

export default Button1;
