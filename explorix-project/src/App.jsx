import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Customize from "./components/Customize";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SignIn from "./components/SignIn";

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
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
