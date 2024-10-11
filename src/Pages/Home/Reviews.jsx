import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  return (
    <div className="w-4/5 h-[280px] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={reviewData.length > 1}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviewData &&
          reviewData.map((review) => (
            <SwiperSlide key={review.id}>
              <article className='mx-14'>
                <div className="flex items-center mb-4">
                  <img
                    className="w-10 h-10 me-4 rounded-full"
                    src={review.img}
                    alt={review.name}
                  />
                  <div className="font-medium text-white">
                    <p>
                      {review.name}
                      <time
                        dateTime="2014-08-16 19:00"
                        className="block text-sm text-gray-400"
                      >
                        {review.joinTime}
                      </time>
                    </p>
                  </div>
                </div>
                <footer className="mb-5 text-sm text-gray-400">
                  <p>{review.reviewLocation}</p>
                </footer>
                <p className="mb-2 text-gray-400">{review.comment}</p>
              </article>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
