import PropTypes from "prop-types";
import ProgramsSec from "../components/ProgramsSec";
import MannequinWrapper from "../components/MannequinWrapper";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import NutritionSlide from "../components/NutritionSlide";

function Home({ data }) {
  return (
    <div className="App">
      <Header />
      <ProgramsSec />
      <MannequinWrapper />
      <NutritionSlide data={data} />
      <Newsletter />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Home;
