import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <h3 className=" text-n-4 lg:block">
          © {new Date().getFullYear()} Explorix. All rights reserved.
        </h3>

        <div className="flex flex-col items-center">
          <h3 className=" text-n-4 mb-3">
            <b>Legal</b>
          </h3>
          <Link to="/termsandconditions" className="inline-block">
            <h6 className=" text-n-4 mb-3">Terms and Conditions</h6>
          </Link>
          <Link to="/privacypolicy" className="inline-block">
            <h6 className=" text-n-4">Privacy Policy</h6>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <h3 className=" text-n-4 mb-3">
            <b>Support</b>
          </h3>
          <h6 className=" text-n-4 mb-3">
            <a
              href="mailto: riyakore1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </h6>
          <h6 className=" text-n-4">
            <a
              href="https://forms.gle/vBoQGVYBd4iUyEUC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report An Issue
            </a>
          </h6>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
