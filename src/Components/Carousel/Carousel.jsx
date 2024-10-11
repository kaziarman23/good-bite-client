import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Carousel Images
import carousel1 from "../../assets/Home/CarouselImages/Carousel1.jpg";
import carousel2 from "../../assets/Home/CarouselImages/Carousel2.jpg";
import carousel3 from "../../assets/Home/CarouselImages/Carousel3.jpg";
import carousel4 from "../../assets/Home/CarouselImages/Carousel4.jpg";
import carousel5 from "../../assets/Home/CarouselImages/Carousel5.jpg";
import carousel6 from "../../assets/Home/CarouselImages/Carousel6.jpg";
import carousel7 from "../../assets/Home/CarouselImages/Carousel7.jpg";
import carousel8 from "../../assets/Home/CarouselImages/Carousel8.jpg";
import carousel9 from "../../assets/Home/CarouselImages/Carousel9.jpg";
import carousel0 from "../../assets/Home/CarouselImages/Carousel10.jpg";

const Carousel = () => {
  const carouselArray = [
    { id: 1, img: carousel1 },
    { id: 2, img: carousel2 },
    { id: 3, img: carousel3 },
    { id: 4, img: carousel4 },
    { id: 5, img: carousel5 },
    { id: 6, img: carousel6 },
    { id: 7, img: carousel7 },
    { id: 8, img: carousel8 },
    { id: 9, img: carousel9 },
    { id: 10, img: carousel0 },
  ];
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full h-full"
    >
      {carouselArray.map((img) => (
        <SwiperSlide key={img.id}>
          <img
            src={img.img}
            alt="carousel images"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
