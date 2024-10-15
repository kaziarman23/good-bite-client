import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import UseAxios from "../../CusmotHooks/UseAxios";

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);
  const axiosPublic = UseAxios();

  axiosPublic.get("/reviews").then((res) => setReviewData(res.data));

  return (
    <div className="w-full max-w-4xl h-auto mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        loop={reviewData.length > 1}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviewData.map((review) => (
          <SwiperSlide key={review._id}>
            <article className="mx-4 sm:mx-8 md:mx-14">
              <div className="flex items-center mb-4">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 mr-3 rounded-full"
                  src={review.img}
                  alt={review.name}
                />
                <div className="font-medium text-white">
                  <p className="text-sm sm:text-base">
                    {review.name}
                    <time
                      dateTime={review.joinTime}
                      className="block text-xs sm:text-sm text-gray-400"
                    >
                      {review.joinTime}
                    </time>
                  </p>
                </div>
              </div>
              <footer className="mb-3 sm:mb-5 text-xs sm:text-sm text-gray-400">
                <p>{review.reviewLocation}</p>
              </footer>
              <p className="mb-2 text-xs sm:text-base text-gray-400">
                {review.comment}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
