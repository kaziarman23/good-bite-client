import { Outlet } from "react-router";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const Root = () => {
  return (
    <div className="">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Root;
