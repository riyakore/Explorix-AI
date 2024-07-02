import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
