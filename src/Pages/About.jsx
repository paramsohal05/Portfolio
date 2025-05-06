import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import NextBtn from "../components/NextBtn";
import { motion } from "motion/react";

const About = () => {

  return (
    <>
      <Container>
        {/* About Heading */}
        <div className="flex flex-col ">
          <Heading title="bout" firstLetter="A" />
          {/* about Content */}
          <div className="flex flex-col  md:space-y-7 ">
            {/* row1 */}
            <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-16 md:ml-6"
            >
              {/* Personal Details */}
              <motion.div animate={{
                x:[-300, 0],
                scale:[0.5, 1]
              }}
              transition={{
                duration:1,
                ease:'easeInOut'
              }}
              className="w-full md:w-1/2   min-h-60 p-2 rounded-xl shadow-2xl">
                <h2 className="text-center font-bold text-xl mt-2">
                  Personal Information
                </h2>
                <ul className="my-7 mx-7 space-y-2 text-sm ">
                  <li>
                    Name : <span>Paramjeet Kaur</span>
                  </li>
                  <li>Nationality : Indian</li>
                  <li>Languages Known : English, Hindi & Punjabi</li>
                </ul>
              </motion.div>
              {/* Education Details  */}
              <motion.div 
              animate={{
                x:[300, 0],
                scale:[0.5, 1]
              }}
              transition={{
                duration:1,
                ease:'easeInOut'
              }}
              className="w-full md:w-1/2  min-h-60 p-2 rounded-xl shadow-2xl">
                <h2 className="text-center font-bold text-xl mt-2">
                  Education
                </h2>
                <ul className="my-7 mx-7 space-y-2 text-sm list-disc">
                  <li>
                    Full Stack Development-2023-2024{" "}
                    <span className="text-xs">Self Studied </span>
                  </li>
                  <li>
                    Bachelor Of Science-2020-2023{" "}
                    <span className="text-xs">MJPR University</span>
                  </li>
                  <li>
                    Intermediate-2017-2018 <span className="text-xs">CBSC</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            {/* row 2  */}
            <div className="flex flex-col  items-center space-y-6 md:space-y-0 md:flex-row md:space-x-16 md:ml-6">
              {/* Interests */}
              <motion.div 
              animate={{
                x:[-300, 0],
                scale:[0.5, 1]
              }}
              transition={{
                duration:1,
                delay:0.5,
                ease:'easeInOut'
              }}
              className="w-full min-h-80 md:w-1/2 p-2 rounded-xl shadow-2xl">
                <h2 className="text-center font-bold text-xl mt-2">
                  Experience{" "}
                </h2>
                <ul className="list-disc mt-4 p-5 text-sm flex flex-col gap-1">
                  <li>
                    As I mentioned above that I learnt Web development self. My
                    independent projects development gave me a great experience
                    and enhanced my skills too.
                  </li>
                  <li>
                    Gained expertise in responsive UI developemnt using React.js
                    and Tailwind CSS
                  </li>
                  <li>
                    Also deepened the backend concepts such as MVC, middlewares
                    & Authentication/Authorisation.
                  </li>
                  <li>
                    Moreover, I deeply explored and understood how client-side
                    &#40; Browser &#41; and server communicate through RESTApi
                    and JSON Requests.
                  </li>
                </ul>
              </motion.div>

              {/* POther Info */}
              <motion.div 
               animate={{
                x:[300, 0],
                scale:[0.5, 1]
              }}
              transition={{
                duration:1,
                delay:0.5,
                ease:'easeInOut'
              }}
              className="w-full md:w-1/2  min-h-80 p-2 rounded-xl shadow-2xl">
                <h2 className="text-center font-bold text-xl mt-2">Mission</h2>
                <p className="p-5 mt-4 text-sm ">
                  My mission is to leverage my skills and to deliver innovative
                  web solutions that exceed client expectations and contribute
                  positive to the digital landscape. I am committed to the
                  continous learning and growth, always seeking new challenges
                  and opportunities to expand my horizon.
                </p>
              </motion.div>
            </div>
          </div>
          <NextBtn title="View Skills" link={"/skills"} />
        </div>
      </Container>
    </>
  );
};

export default About;
