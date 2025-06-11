import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  instagram,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  twitter,
} from "../../src/assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  {
    id: "5",
    title: "Sign in",
    // url: "#login",
    onlyMobile: true,
  },
];

// being used
export const roadmap = [
  {
    id: "0",
    title: "Step 1: Select your travel destination",
    text: "Select the place you want to go to along with your travel dates. You can also add new destinations",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Step 2: Select your activities",
    text: "Will your travel be adventurous or a staycation or a mix of both? Select the kind of activities you want to do and we will make sure to give you want you want!",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Step 3: Tell us who you are going with",
    text: "Travel planning is easier when we know who you are planning to travel with. Is it with family or friends? This will make the activity suggestions better.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Step 4: Click the magic button!",
    text: "After you are done filling out all the information, click the Generate button and voila! Your customized travel itinerary is ready!",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

// being used
export const benefits = [
  {
    id: "0",
    title: "Super Fast",
    text: "Gives you the ideal plan for your travel",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improves everyday",
    text: "This website uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Understands your needs",
    text: "We will understand your needs and give you the best plan for an adventure or a staycation",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Completely Customizable",
    text: "Don't like a hotel or any place in you itinerary? Ask the chatbot to make a change!",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Lorem Ipsum",
    text: "Need to add more features here",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Lorem Ipsum",
    text: "Need to add more text here",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

// being used
export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/riyakore",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/riyakore/",
  },
];
