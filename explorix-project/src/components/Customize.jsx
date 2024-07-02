import Header from "./Header";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const Customize = () => {
  return (
    <Section>
      <div className="container relative z-2 mt-4 lg:mt-1">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Make your itinerary here!"
        />

        <Button className="hover:text-color-7">Select</Button>
      </div>
    </Section>
  );
};

export default Customize;
