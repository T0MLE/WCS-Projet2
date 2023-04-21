import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Pagination } from "swiper";

import MannequinBack from "./MannequinBack";
import MannequinFront from "./MannequinFront";

function MannequinWrapper() {
  return (
    <>
      <h2 className="muscle-section-title">Find an exercise</h2>
      <div className="mySwiper" id="swiper">
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
          <div className="swiper-pagination">
            <span className="swiper-pagination-bullet">prout</span>
            <span className="swiper-pagination-bullet">prout</span>
          </div>
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
