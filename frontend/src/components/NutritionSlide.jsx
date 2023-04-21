import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Pagination } from "swiper";

function NutritionSlide({ data }) {
  return (
    <div key={data.idMeal}>
      <section className="NutritionSection">
        <h2>Nutrition</h2>
        <Swiper
          spaceBetween={30}
          pagination
          modules={[Pagination]}
          className="NutritionSlide"
        >
          {data.map((e) => {
            return (
              <SwiperSlide key={e.idMeal}>
                <img src={e.strMealThumb} alt="food" />
                <h3>{e.strMeal}</h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="buttonCenter">
          <button type="button">More healthy recipes</button>
        </div>
      </section>
    </div>
  );
}
NutritionSlide.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
};

export default NutritionSlide;
