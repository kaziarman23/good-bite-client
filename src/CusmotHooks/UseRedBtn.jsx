const UseRedBtn = ({ children }) => {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group  focus:ring-4 focus:outline-none border-2 hover:bg-red-800 hover:border-red-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
        {children}
      </span>
    </button>
  );
};

export default UseRedBtn;
