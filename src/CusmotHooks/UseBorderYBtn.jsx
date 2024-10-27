import "./CSS/UseBorderYBtn.css";

const UseBorderYBtn = ({ children, size, className }) => {
  return (
    <button
      className={`
    ${size ? size : "text-xl"}
    ${className ? className : ""}
    borderYBtn
    `}
    >
      <span className="borderContent">{children}</span>
    </button>
  );
};

export default UseBorderYBtn;
