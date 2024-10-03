import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

function CodeBlocks({
  position,
  heading,
  subHeading,
  ctaBtn1,
  ctaBtn2,
  codeColor,
  codeBlock,
}) {
  return (
    <div className={`flex justify-evenly items-center ${position}`}>
      <div className="w-[45%] flex flex-col p-4">
        <div className="text-4xl font-semibold">{heading}</div>
        <p className="text-richblack-300 mt-4 text-[16px]">{subHeading}</p>
        <div className="flex gap-4 mt-14">
          <CTAButton active={ctaBtn1.active} linkTo={ctaBtn1.linkTo}>
            <div className="flex gap-3 items-center text-sm">
              {ctaBtn1.text}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctaBtn2.active} linkTo={ctaBtn2.linkTo}>
            {ctaBtn2.text}
          </CTAButton>
        </div>
      </div>

      <div className="md:w-[300px] w-[45%] bg-richblack-900 flex text-center  h-fit text-[10px] border-solid border-richblack-700 border-[1px] rounded-lg p-2">
        <div className="w-[10%] flex flex-col gap-[5px] font-bold bg-richblack-900 text-richblack-300 py-1">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
        </div>
        <div
          className={`w-[90%] flex flex-col items-start font-bold gap-2 font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeBlock, 3000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              textAlign: "left",
              gap: 2,
              marginBottom: 5,
             
              lineHeight: '2', 
              fontSize:10

            }}
            omitDeletionAnimation={true}
            
          />
        </div>
      </div>
    </div>
  );
}

export default CodeBlocks;
