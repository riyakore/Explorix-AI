import React from 'react';
import Section from './Section';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Button from './Button';

const SignUp = () => {
  return (
    <Section className="pt-[9rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings>
      <div className="container relative items-center">
        <div className="relative max-w-[23rem] mx-auto md:max-w-2xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-7">
              <h1 className="h4 text-center text-n-1">Make A New Account</h1>
              <div className="flex flex-col items-center">
                <input className="bg-n-4 mt-8 w-1/2 h-12 px-3 rounded-md" type="text" value="Name"></input>
                <input className="bg-n-4 mt-8 w-1/2 h-12 px-3 rounded-md" type="text" value="Email"></input>
                <input className="bg-n-4 mt-8 w-1/2 h-12 px-3 rounded-md" type="text" value="Password"></input>
                <input className="bg-n-4 mt-8 w-1/2 h-12 px-3 rounded-md" type="text" value="Retype Password"></input>
                <Button className="mt-8">Sign Up</Button>
                <p className="mt-6">Already have an Account? {` `}
                <Link to="/signin" className="inline-block"><u> Sign In </u></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <GradientLight1 />
      <GradientLight2  /> */}
      <Footer></Footer>
    </Section>
  );
};

export default SignUp
