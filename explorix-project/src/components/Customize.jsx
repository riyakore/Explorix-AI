import Header from "./Header";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { BackgroundCircles, Rings } from "./design/Header";
import { Gradient } from "./design/Hero";
import { benefits } from "../constants";
import { GradientLight1 } from "./design/Benefits";
import { GradientLight2 } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Customize = () => {
  return (
    <Section crosses>
      {/* <div className="container relative z-2 mt-1 lg:-mt-10 text-center">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center -mt-28"
          title="Make your travel itinerary with us!"
        />
        <div className="flex flex-col items-center px-20 py-20">
          <input
            type="text"
            className="bg-n-9/40 rounded-lg -mt-4 lg:-mt-10 w-1/2
            lg:w-1/3 h-10 text-n-4 px-3"
            value="Select Your Destination"
          ></input>
          <Button className="mt-4 mb-8 lg:mb-20">Next</Button>
          <input
            type="text"
            className="bg-n-9/40 rounded-lg -mt-4 lg:-mt-10 w-1/2 lg:w-1/3 h-10 text-n-4 px-3"
            value="Select Your Travel Dates"
          ></input>
          <Button className="mt-4 mb-8">Next</Button>
          <Rings />
          <BackgroundCircles />
        </div>
      </div> */}

      <div className="container relative z-2 mt-1 lg:-mt-28">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Make your travel itinerary with us!"
        ></Heading>
        <div className="flex flex-col items-center px-10 py-10 mx-28 my-5">
          <input
            type="text"
            className="bg-n-8 rounded-lg w-1/2
            lg:w-1/3 h-10 text-n-4 px-3"
            value="Select Your Destination"
          ></input>
          <Button className="mt-4 mb-8 lg:mb-20">Next</Button>
          <input
            type="text"
            className="bg-n-9/40 rounded-lg -mt-4 lg:-mt-10 w-1/2 lg:w-1/3 h-10 text-n-4 px-3"
            value="Select Your Travel Dates"
          ></input>
          <Button className="mt-4 mb-8">Next</Button>
        </div>
      </div>
      <GradientLight1 />
      <GradientLight2 />
    </Section>
  );
};

export default Customize;
