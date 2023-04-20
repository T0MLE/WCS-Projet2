import { Swiper, SwiperSlide, Pagination } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import MannequinBack from "./MannequinBack";
import MannequinFront from "./MannequinFront";

function MannequinWrapper() {
  return (
    <>
      <h2>Find an exercise</h2>
      <div className="mySwiper">
        <Swiper
          spaceBetween={30}
          pagination
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <MannequinFront className="mannequin" />
          </SwiperSlide>
          <SwiperSlide>
            <MannequinBack className="mannequin" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="DesktopSwiper">
        <MannequinFront className="mannequin-front" />
        <MannequinBack className="mannequin-back" />
      </div>
    </>
  );
}

export default MannequinWrapper;
