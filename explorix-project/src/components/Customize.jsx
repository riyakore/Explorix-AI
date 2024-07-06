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
import Footer from "./Footer";
import DatePicker from "react-datepicker";

const Customize = () => {
  // implement the onSelect implementation
  // add calendar api
  // add drop down for destinations and give a list of destinations to select from
  return (
    <>
      <Section crosses>
        <div className="container relative z-2 mt-1 lg:-mt-28">
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="Make your travel itinerary with us!"
          ></Heading>
          <div className="flex flex-col items-center px-32 py-20 mx-28 -my-20">
            <input
              type="text"
              className="bg-n-8 rounded-lg w-72
            lg:w-2/3 h-16 text-n-1 px-5"
              value="Select Your Destination"
            ></input>
            <Button className="mt-4 mb-8 lg:mb-20">Next</Button>
            {/* insert calendar dates api */}
            {/* <input
              type="text"
              className="bg-n-8 rounded-lg lg:-mt-10 w-1/2 lg:w-2/3 h-16 text-n-1 px-5"
              value="Select Your Travel Dates"
            ></input> */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-n-1 lg:-mt-8 -mx-2 mb-4 lg:mb-0 lg:mx-8">Select Your Travel Dates</h1>
              <div className="flex flex-row">
              <input
              type="text"
              className="bg-n-8 rounded-lg lg:mt-6 w-48 lg:w-2/3 h-16 text-n-1 px-5 mx-3 lg:mx-6"
              value="Select Start Date"
            ></input>
            <input
              type="text"
              className="bg-n-8 rounded-lg lg:mt-6 w-48 lg:w-2/3 h-16 text-n-1 px-5 mx-3 lg:mx-6"
              value="Select End Date"
            ></input>
              </div>
            </div>
            <Button className="mt-4 mb-8 lg:mb-20">Next</Button>
            <h1 className="text-n-1 lg:-mt-8 -mx-2 text-left">
              What kind of things do you want to do?
            </h1>
            {/* maybe add one more div to make a container */}
            {/* onSelect, it makes the button white */}
            <div className="flex flex-wrap gap-4 mb-8 lg:mb-24 mt-10">
              <Button>Adventurous</Button>
              <Button>Relaxing</Button>
              <Button>Staycation</Button>
              <Button>Shopping</Button>
              <Button>Family Friendly</Button>
              <Button>Activities for Kids</Button>
              <Button>Religious</Button>
              <Button>Cultural</Button>
              <Button>Touristy</Button>
              <Button>Known For</Button>
            </div>
            {/* figure out a way to add text to the right of the input box */}
            <input
              type="text"
              className="bg-n-8 rounded-lg lg:-mt-10 w-1/2 lg:w-2/3 h-16 text-n-1 px-5"
              value="How many people are going?"
            ></input>
            <Button className="mt-15 -mb-16" white>Customize!</Button>
          </div>
        </div>
        <GradientLight1 />
        <GradientLight2 />
      </Section>
      <Footer></Footer>
    </>
  );
};

export default Customize;
