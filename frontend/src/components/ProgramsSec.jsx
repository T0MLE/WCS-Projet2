import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Pagination } from "swiper";

function ProgramsSec() {
  return (
    <div className="ProgramSection">
      <div>
        <h2 className="ProgramsTit">Explore our programs</h2>
        <p className="Description">
          {" "}
          Do you want to reach your fitness goals ? {"\n"} {"\n"} We have
          selected the best programs made by our coaches to bring you to the
          next level !{" "}
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          pagination
          modules={[Pagination]}
          className="ProgramsSec"
        >
          <SwiperSlide className="Card1" />
          <SwiperSlide className="Card2" />
          <SwiperSlide className="Card3" />
          <SwiperSlide className="Card4" />
          <SwiperSlide className="Card5" />
          <SwiperSlide className="Card6" />
        </Swiper>
      </div>
    </div>
  );
}

export default ProgramsSec;
