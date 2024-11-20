import React from "react";
import instructorImage from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa6";

function InstructorSection() {
  return (
    <div className="w-full flex items-center justify-between p-8 py-14">
      <div className="w-[45%]">
        <img src={instructorImage} alt="instructor_pic" />
      </div>
      <div className="flex flex-col justify-between gap-5 w-[45%] font-inter">
        <div className="text-4xl">
          Become an <br></br>
          <HighlightText text={"instructor"} />
        </div>
        <div className="text-[16px] text-richblack-300 pr-10">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you <br/> love.
        </div>
        <div className="w-fit mt-10">
          <CTAButton active={true} linkTo={"/signup"}>
            <div className="flex items-center gap-2 max-w-maxContent">
              Start Teaching Today <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
