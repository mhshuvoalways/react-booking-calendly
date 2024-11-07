import { MoveRight } from "lucide-react";

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
      <MoveRight />
    </button>
  );
};

export default Button1;
