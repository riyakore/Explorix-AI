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
import Counter from "./Counter";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Customize = () => {
  // add calendar api
  // add drop down for destinations and give a list of destinations to select from

  const [selectedActivities, setSelectedActivities] = useState([]);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const activities = [
    "Adventurous", "Relaxing", "Staycation", "Shopping", 
    "Family Friendly", "Activities for Kids", "Religious", 
    "Cultural", "Touristy", "Known For"
  ];

  const toggleActivity = (activity) => {
    setSelectedActivities(prev => 
      prev.includes(activity) 
        ? prev.filter(a => a !== activity) 
        : [...prev, activity]
    );
  };

  return (
    <>
      <Section crosses>
        <div className="container relative z-2 mt-1 lg:-mt-28">
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="Make your travel itinerary with us!"
          ></Heading>
          <div className="flex flex-col items-center lg:px-32 py-20 lg:mx-28 -my-20">
          <h1 className="text-n-1 lg:-mt-8 -mx-2 mb-4 lg:mb-7 lg:mx-8">Select Your Destination</h1>
            <input
              type="text"
              className="bg-n-8 rounded-lg w-72
            lg:w-2/3 h-16 text-n-1 px-5"
              placeholder="Select Your Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            ></input>
            <Button className="mt-4 mb-8 lg:mb-20">Next</Button>
            {/* insert calendar dates api */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-n-1 mt-10 lg:-mt-8 -mx-2 mb-4 lg:mb-0 lg:mx-8">Select Your Travel Dates</h1>
              {/* <div className="flex flex-row">
              <input
              type="text"
              className="bg-n-8 rounded-lg lg:mt-6 w-40 lg:w-2/3 h-16 text-n-1 px-5 mx-3 lg:mx-6"
              placeholder="Start"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
            <input
              type="text"
              className="bg-n-8 rounded-lg lg:mt-6 w-40 lg:w-2/3 h-16 text-n-1 px-5 mx-3 lg:mx-6"
              placeholder="End"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
              </div> */}
              <div className="flex flex-row">
  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    placeholderText="Start Date"
    className="bg-n-8 rounded-lg lg:mt-6 w-40 lg:w-2/3 h-16 text-n-1 px-5 mx-3 lg:mx-6"
  />
  <DatePicker
    selected={endDate}
    onChange={(date) => setEndDate(date)}
    placeholderText="End Date"
    className="bg-n-8 rounded-lg lg:mt-6 w-40 lg:w-2/3 h-16 text-n-1 px-5 mx-3 lg:mx-6"
  />
</div>
            </div>

            <Button className="mt-4 mb-8 lg:mb-20">Next</Button>

          <h1 className="text-n-1 mt-10 lg:-mt-8 -mx-2 text-left">
            What kind of things do you want to do?
          </h1>
          <div className="flex flex-wrap gap-4 mb-8 lg:mb-24 mt-10">
            {activities.map((activity) => (
            <Button
            key={activity}
            onClick={() => toggleActivity(activity)}
            isSelected={selectedActivities.includes(activity)}
            >
              {activity}
            </Button>
            ))}
          </div>
            <h1 className="text-n-1 mt-10 lg:-mt-10 mb-7">How many people are going?</h1>
            <Counter />
            <Button className="mt-15 lg:-mb-16 mb-10" white>Customize!</Button>
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
