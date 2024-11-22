import React from "react";
import HighlightText from "../components/common/HighlightText";
import banner1 from "../assets/Images/aboutus1.webp";
import banner2 from "../assets/Images/aboutus2.webp";
import banner3 from "../assets/Images/aboutus3.webp";
import foundingStory from "../assets/Images/FoundingStory.png";

function About() {
  return (
    <div className="bg-richblack-900 min-h-screen relative">
        <div className="bg-richblack-800 absolute top-0 z-0  h-[450px]">
        
        </div>
      {/* section # 1  */}
      <section >
        
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
          <div className="text-3xl font-bold text-center w-[65%] m-auto mt-20 pb-5">
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
     <section>
     <div className="flex">
        <div className="flex flex-col">
          <h1>Our Founding Story</h1>
          <div>
            <p>
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
            <p>
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
          </div>
        </div>
        <div>
            <img src={foundingStory} alt="foundingStory_image" />
        </div>
        
      </div>
     </section>
    </div>
  );
}

export default About;
