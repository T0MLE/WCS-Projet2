import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProgramsSec from "./ProgramsSec";
import MannequinWrapper from "./MannequinWrapper";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

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
