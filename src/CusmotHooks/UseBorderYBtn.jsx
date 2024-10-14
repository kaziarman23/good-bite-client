import "./CSS/UseBorderYBtn.css";

const UseBorderYBtn = ({ children, size }) => {
  return (
    <button className={`${size ? size : "text-xl"} borderYBtn`}>
      {children}
    </button>
  );
};

export default UseBorderYBtn;