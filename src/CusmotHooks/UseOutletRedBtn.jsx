const UseOutletRedBtn = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className=" focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border text-white hover:text-black hover:bg-red-600 hover:border-red-500 focus:ring-red-900"
    >
      {children}
    </button>
  );
};

export default UseOutletRedBtn;
