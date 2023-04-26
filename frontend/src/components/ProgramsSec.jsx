import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Pagination } from "swiper";
import Start from "./Start";

function ProgramsSec() {
  return (
    <div className="ProgramSection">
      <h2 className="ProgramsTit">Explore our programs</h2>
      <p className="Description">
        {" "}
        Do you want to reach your fitness goals ? {"\n"} {"\n"} We have selected
        the best programs made by our coaches to bring you to the next level !
        Thousands of people have already changed their lives thanks to our
        application. Why not yours ?
      </p>
      <Swiper
        spaceBetween={30}
        pagination
        modules={[Pagination]}
        className="ProgramsSec"
      >
        <SwiperSlide className="Card1">
          <Link className="linkcard" to="/bootypump" />
        </SwiperSlide>
        <SwiperSlide className="Card2">
          <Link className="linkcard" to="/musclebuilding" />
        </SwiperSlide>
        <SwiperSlide className="Card3">
          {" "}
          <Link className="linkcard" to="/fullbody" />
        </SwiperSlide>{" "}
        <SwiperSlide className="Card4">
          <Link className="linkcard" to="/bodyweight" />
        </SwiperSlide>{" "}
        <SwiperSlide className="Card5">
          <Link className="linkcard" to="/subscription" />
        </SwiperSlide>
        <SwiperSlide className="Card6">
          <Link className="linkcard" to="/subscription" />
        </SwiperSlide>
      </Swiper>
      <p className="Description">
        Want to get full access to our programs ? {"\n"} {"\n"} Click below to
        get a look at our subscription page and chose the plan that fits you the
        best !{" "}
      </p>
      <Link className="linkcard" to="/subscription">
        <Start content="Click Here" />
      </Link>
    </div>
  );
}

export default ProgramsSec;

// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { register } from "swiper/element";

// register();

// function ProgramsSec() {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiperContainer = swiperRef.current;
//     const params = {
//       navigation: true,
//       pagination: true,
//       injectStyles: [
//         `
//         .swiper-button-next,
//             .swiper-button-prev {
//               display:none        }
//               .swiper-pagination{
//                 position:initial
//               }`,
//       ],
//     };

//     Object.assign(swiperContainer, params);
//     swiperContainer.initialize();
//   }, []);

//   return (
//     <div className="ProgramSection">
//       <h2 className="ProgramsTit">Explore our programs</h2>
//       <p className="Description">
//         {" "}
//         Do you want to reach your fitness goals ? {"\n"} {"\n"} We have selected
//         the best programs made by our coaches to bring you to the next level !{" "}
//       </p>
//       <swiper-container ref={swiperRef} init="false">
//         <swiper-slide class="Card1">
//           <Link className="linkcard" to="/bootypump" />
//           Slide 1
//         </swiper-slide>
//         <swiper-slide class="Card2">
//           <Link className="linkcard" to="/musclebuilding" />
//           Slide 2
//         </swiper-slide>
//         <swiper-slide class="Card3">
//           {" "}
//           <Link className="linkcard" to="/fullbody" />
//           Slide 3
//         </swiper-slide>
//         <swiper-slide class="Card4">
//           <Link className="linkcard" to="/bodyweight" />
//           Slide 3
//         </swiper-slide>
//         <swiper-slide class="Card5">Slide 3</swiper-slide>
//         <swiper-slide class="Card6">Slide 3</swiper-slide>
//       </swiper-container>
//       <p className="Description">
//         {" "}
//         Want to get full access to our programs ? {"\n"} {"\n"} Click here to
//         get a look at our subscription page and chose the plan that fits you the
//         best !{" "}
//       </p>
//     </div>
//   );
// }

// export default ProgramsSec;
