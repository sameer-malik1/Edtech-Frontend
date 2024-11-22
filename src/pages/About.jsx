import React from "react";
import HighlightText from "../components/common/HighlightText";
import banner1 from "../assets/Images/aboutus1.webp";
import banner2 from "../assets/Images/aboutus2.webp";
import banner3 from "../assets/Images/aboutus3.webp";
import foundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/AboutPage/StatsComponent";
import LearningGrid from "../components/core/AboutPage/LearningGrid";

function About() {
  return (
    <div className="bg-richblack-900 min-h-screen relative">
      <div className="bg-richblack-800 absolute top-0 z-0  h-[450px]"></div>
      {/* section # 1  */}
      <section className="border-b-[2px] border-richblack-800">
        <div className="z-10">
          <div className="w-[45%] m-auto flex flex-col items-center gap-2 mb-7">
            <h1 className="text-3xl font-bold">
              Driving innovation in Online Education for
            </h1>
            <div className="text-3xl">
              <HighlightText text={"Brighter Future"} />
            </div>
            <p className="text-richblack-300 text-center">
              Studynotion is the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting edge course, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img
              src={banner1}
              className="lg:w-[300px] lg:h-auto"
              alt="banner-1"
            />
            <img
              src={banner2}
              className="lg:w-[300px] lg:h-auto"
              alt="banner-2"
            />
            <img
              src={banner3}
              className="lg:w-[300px] lg:h-auto"
              alt="banner-3"
            />
          </div>
          {/* quote  */}
          <div className="text-3xl font-bold text-center w-[65%] m-auto mt-20 pb-20">
            <span>“</span> We are passionate about revolutionizing the way we
            learn. Our innovative platform{" "}
            <HighlightText text={"combines technology"} />,{" "}
            <span className="text-brown-100">expertise</span>, and community to
            create an{" "}
            <span className="text-brown-200">
              unparalleled educational experience
            </span>
            . <span>”</span>
          </div>
        </div>
      </section>

      {/* section 2  */}
      <section className="mt-20 mb-20">
        <div className="flex items-center justify-between gap-10 lg:w-[60%] lg:m-auto">
          <div className="flex flex-col w-[40%]">
            <h1 className="text-3xl font-bold text-brown-200">
              Our Founding Story
            </h1>
            <div>
              <p className="text-justify mb-3 mt-3">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-justify">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={foundingStory}
              alt="foundingStory_image"
              className="w-[80%] h-auto"
            />
          </div>
        </div>
      </section>

      {/* section 3  */}
      <section className="mt-40">
        <div className="lg:w-[60%] lg:m-auto lg:flex lg:items-center lg:justify-between gap-4">
          {/* left side  */}
          <div className="w-[40%]">
            <h1 className="text-3xl font-bold text-brown-200 mb-4">Our Vision</h1>
            <p className="text-richblack-400 text-left">
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a
              robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </div>
          {/* right side  */}
          <div className="w-[40%]">
            <h1 className="text-3xl font-bold text-blue-300 mb-4">Our Mission</h1>
            <p className="text-richblack-400 text-left">
              our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* section 4  */}
      <section>
        <StatsComponent />
      </section>

      {/* section 5 */}
      <section>
        <LearningGrid />
      </section>
    </div>
  );
}

export default About;
