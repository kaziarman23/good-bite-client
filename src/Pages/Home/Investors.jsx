import Marquee from "react-fast-marquee";
import logo1 from "../../assets/Home/InvestorsLogo/adobe.png";
import logo2 from "../../assets/Home/InvestorsLogo/amd.png";
import logo3 from "../../assets/Home/InvestorsLogo/ati.png";
import logo4 from "../../assets/Home/InvestorsLogo/electronics-arts.png";
import logo5 from "../../assets/Home/InvestorsLogo/intel.png";
import logo6 from "../../assets/Home/InvestorsLogo/nvidia.png";
import logo7 from "../../assets/Home/InvestorsLogo/oracle.png";
import logo8 from "../../assets/Home/InvestorsLogo/samsung.png";
import logo9 from "../../assets/Home/InvestorsLogo/uber.png";
import logo10 from "../../assets/Home/InvestorsLogo/zoom.png";
import logo11 from "../../assets/Home/InvestorsLogo/vk.png";
import logo12 from "../../assets/Home/InvestorsLogo/pinterest.png";

const Investors = () => {
  const logos = [
    { id: 1, image: logo1, name: "Adobe" },
    { id: 2, image: logo2, name: "AMD" },
    { id: 3, image: logo3, name: "ATI" },
    { id: 4, image: logo4, name: "Electronic Arts" },
    { id: 5, image: logo5, name: "Intel" },
    { id: 6, image: logo6, name: "NVIDIA" },
    { id: 7, image: logo7, name: "Oracle" },
    { id: 8, image: logo8, name: "Samsung" },
    { id: 9, image: logo9, name: "Uber" },
    { id: 10, image: logo10, name: "Zoom" },
    { id: 11, image: logo11, name: "vk" },
    { id: 12, image: logo12, name: "pinterest" },
  ];

  return (
    <div className="w-full h-full bg-black overflow-hidden">
      <div className="w-4/5 h-full my-5 border-y-2 p-3 mx-auto" title="Sponsors">
        <Marquee speed={80}>
          {logos.map((logo) => (
            <img
              key={logo.id}
              src={logo.image}
              alt={logo.name}
              className="w-14 h-14 mx-5"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Investors;
