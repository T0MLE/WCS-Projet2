import { useEffect, useState } from "react";
import ProgramsSec from "../components/ProgramsSec";
import MannequinWrapper from "../components/MannequinWrapper";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import NutritionSlide from "../components/NutritionSlide";

function Home() {
  const [nutrition, setNutrition] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/data")
      .then((response) => response.json())
      .then((result) => {
        setNutrition(result.slice(0, 10));
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <Header />
      <ProgramsSec />
      <MannequinWrapper />
      <NutritionSlide data={nutrition} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
