import React from "react";
import ProgramsSec from "./ProgramsSec";
import MannequinWrapper from "./MannequinWrapper";
import Header from "./Header";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ProgramsSec />
      <MannequinWrapper />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
