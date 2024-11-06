const Button = ({ title, onClick, isClicked, primaryColor }) => {
  return (
    <button
      className="booking-btn"
      style={{
        backgroundColor: primaryColor,
        opacity: "70%",
      }}
      onClick={onClick}
      disabled={isClicked}
      onMouseOver={(e) => {
        e.currentTarget.style.opacity = "100%";
        e.currentTarget.style.borderColor = primaryColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.opacity = "70%";
        e.currentTarget.style.borderColor = "";
      }}
    >
      {title}
    </button>
  );
};

export default Button;
