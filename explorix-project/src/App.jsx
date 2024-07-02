import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Customize from "./components/Customize";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Roadmap />
                <Footer />
              </>
            }
          />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
