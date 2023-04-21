import React from "react";
import ProgramsSec from "./ProgramsSec";
import MannequinWrapper from "./MannequinWrapper";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <ProgramsSec />
      <MannequinWrapper />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
