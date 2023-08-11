import React from "react";
import Navbar from "./container/Navbar";
import Features from "./container/Features";
import Footer from "./container/Footer";
import HeroApp from "./container/HeroApp";
import TeamApp from "./container/TeamApp";
import WorkApp from "./container/WorkApp";
import ReactHelmet from "react-helmet";
function App() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ReactHelmet>
        <script src="assets/js/theme.min.js"></script>
      </ReactHelmet>
      <div className="App">
        <Navbar />
        <HeroApp />
        <Features />
        <WorkApp />
        <TeamApp />
        <button
          data-toggle="back-to-top"
          className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center"
          onClick={handleBackToTop}
        >
          <i className="fa-solid fa-arrow-up text-base"></i>
        </button>
        <Footer />
      </div>
    </>
  );
}

export default App;
