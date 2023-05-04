import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import ProgramsSec from "../components/ProgramsSec";
import MannequinWrapper from "../components/MannequinWrapper";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, []);
  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      <Header />
      <ProgramsSec />
      <MannequinWrapper />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
