import React from "react";
import PropTypes from "prop-types";

function NutritionCard({ data }) {
  // console.warn("nutrition --->", data);
  return (
    <div>
      <div key={data.idMeal}>
        <img src={data.strMealThumb} alt="food" />
        <ul>
          <li>{data.strCategory}</li>
        </ul>
      </div>
      {/* {data.map((miam) => {
        return (
          <div key={miam.idMeal}>
            <img src={miam.strMealThumb} alt="food" />
            <ul>
              <li>{miam.strCategory}</li>
            </ul>
          </div>
        );
      })} */}
    </div>
  );
}

NutritionCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
};

export default NutritionCard;
