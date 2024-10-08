import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from "../components/HomePage/HighlightText";
import CTAButton from "../components/HomePage/Button";
import boxoffice from "../assets/Images/boxoffice.png";
import CodeBlocks from "../components/HomePage/CodeBlocks";
import timelineLogo1 from "../assets/TimeLineLogo/Logo1.svg";
import timelineLogo2 from "../assets/TimeLineLogo/Logo2.svg";
import timelineLogo3 from "../assets/TimeLineLogo/Logo3.svg";
import timelineLogo4 from "../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../assets/Images/TimelineImage.png";
import knowYourProgress from '../assets/Images/Know_your_progress.png'
import compareWithOthers from '../assets/Images/Compare_with_others.png'
import planYourLesson from '../assets/Images/Plan_your_lessons.png'
import InstructorSection from "../components/HomePage/InstructorSection";
import ExploreMore from "../components/HomePage/ExploreMore";
import Footer from "../components/HomePage/Footer";


function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="relative mx-auto w-11/12 flex flex-col items-center text-white justify-between py-10 max-w-maxContent ">
        <Link to={"/signup"}>
          <div className="mx-auto flex items-center bg-richblack-800 text-richblue-200 border-solid hover:border-richblack-200 border-2 rounded-full px-4 py-1 gap-4 hover:bg-richblack-900 hover:scale-105 transition-all duration-500">
            <p>Become an Instructor</p>
            <FaArrowRight />
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold mt-6">
          Empower your Future with <HighlightText text={"Coding Skills"} />
        </div>
        <div className="w-[75%] mt-4  text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-4 mt-6">
          <CTAButton linkTo={"/signup"} active={true}>
            Learn More
          </CTAButton>
          <CTAButton linkTo={"/login"}>Book Demo</CTAButton>
        </div>

        <div className="mt-12">
          <img src={boxoffice} />
        </div>

        {/* code section 1 */}
        <div className="mt-24">
          <CodeBlocks
            position={"flex-row"}
            heading={
              <div>
                Unlock your <HighlightText text={"Coding Potential"} /> with our
                online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctaBtn1={{
              text: "Try it Yourself",
              active: true,
              linkTo: "#",
            }}
            ctaBtn2={{
              text: "Learn more",
              active: false,
              linkTo: "#",
            }}
            codeBlock={
              '<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a></nav>\n</body>\n</html>\n'
            }
            codeColor={"text-yellow-500"}
          />
        </div>
        {/* code section 2 */}
        <div className="mt-24">
          <CodeBlocks
            position={"flex-row-reverse"}
            heading={
              <div className="w-[50%]">
                Start <HighlightText text={"Coding in seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctaBtn1={{
              text: "Continue Lesson",
              active: true,
              linkTo: "#",
            }}
            ctaBtn2={{
              text: "Learn more",
              active: false,
              linkTo: "#",
            }}
            codeBlock={
              '<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a>\n<a href="two/">Two</a>\n<a href="three/">Three</a></nav>\n</body>\n</html>\n'
            }
            codeColor={"text-blue-300"}
          />
        </div>

          <div className="mt-48">
            <ExploreMore />
          </div>

      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepageWhiteBg h-[400px] "></div>
        <div className="mx-auto w-11/12 flex flex-col   max-w-maxContent">
          <div className="flex items-center justify-between p-10">
            <div className="w-[45%] text-4xl self-start">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand"} />.
            </div>
            <div className="flex flex-col justify-between gap-10 w-[45%]">
              <div>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div className="flex justify-start">
                <CTAButton linkTo={"#"} active={true}>
                  Learn more
                </CTAButton>
              </div>
            </div>
          </div>
        </div>

        {/* leadership section */}
        <div className="mx-auto w-11/12 flex justify-between items-center max-w-maxContent py-10">
          {/* left-part */}
          <div className="flex flex-col gap-3 p-10">
            <div className="flex gap-4">
              <div className="h-[3rem] w-[3rem] bg-white shadow-md rounded-full p-3">
                <img src={timelineLogo1} className="w-full h-full" />
              </div>
              <div className="font-bold text-md">
                Leadership{" "}
                <p className="text-sm font-normal">
                  Fully committed to the success company
                </p>
              </div>
            </div>
            <div className="h-7 ml-6 max-w-[1px] border-dashed border-pure-greys-50 border-[1px]"></div>
            <div className="flex gap-4">
              <div className="h-[3rem] w-[3rem] bg-white shadow-md rounded-full p-3">
                <img src={timelineLogo2} className="w-full h-full" />
              </div>
              <div className="font-bold text-md">
                Responsibility{" "}
                <p className="text-sm font-normal">
                  Students will always be our top priority
                </p>
              </div>
            </div>
            <div className="h-7 ml-6 max-w-[0.2px] border-dashed border-pure-greys-50 border-[1px]"></div>

            <div className="flex gap-4">
              <div className="h-[3rem] w-[3rem] bg-white shadow-md rounded-full p-3">
                <img src={timelineLogo3} className="w-full h-full" />
              </div>
              <div className="font-bold text-md">
                Flexibility{" "}
                <p className="text-sm font-normal">
                  The ability to switch is an important skills
                </p>
              </div>
            </div>
            <div className="h-7 ml-6 max-w-[0.2px] border-dashed border-pure-greys-50 border-[0.1px]"></div>

            <div className="flex gap-4">
              <div className="h-[3rem] w-[3rem] bg-white shadow-md rounded-full p-3">
                <img src={timelineLogo4} className="w-full h-full" />
              </div>
              <div className="font-bold text-md">
                Solve the problem{" "}
                <p className="text-sm font-normal">
                  Code your way to a solution
                </p>
              </div>
            </div>
          </div>
          {/* right-part */}
          <div>
            <div className="relative">
              <img src={timeLineImage} alt="" />
              <div className="py-5 absolute left-[50%] -translate-x-[50%] translate-y-[50%] bottom-0  bg-caribbeangreen-700 flex items-center justify-center ">
                <div className="h-[50%] flex justify-center w-full">
                  <div className="bg-caribbeangreen-700 flex p-4 h-[20px] text-white gap-4 pr-8 items-center border-r-[1px] border-caribbeangreen-300 border-solid">
                    <h2 className="font-extrabold text-2xl">10</h2>{" "}
                    <p className="text-[10px] text-caribbeangreen-300">
                      YEARS <br></br>EXPERIENCE
                    </p>
                  </div>
                  {/* <div className="border-[0.5px] border-caribbeangreen-300 border-solid"></div> */}
                  <div className="bg-caribbeangreen-700 flex p-4 h-[20px] text-white gap-4 pl-8 items-center border-l-[1px] border-caribbeangreen-300 border-solid">
                    <h2 className="font-extrabold text-2xl">250</h2>{" "}
                    <p className="text-[10px] text-caribbeangreen-300 max-w-maxContent">
                      TYPES <br></br>OF COURSES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card section  */}
        <div className="mx-auto mt-10 w-11/12 flex flex-col justify-between items-center max-w-maxContent py-10">
          <div className="text-4xl font-inter font-bold">
            Your swiss knife for{" "}
            <HighlightText text={"learning any language"} />
          </div>
          <div className="w-[60%] mt-2 text-center text-[16px]">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more
          </div>
          <div className="flex justify-center items-center">
            <img src={knowYourProgress}  className="object-contain -mr-32 -mt-12"/>
            <img src={compareWithOthers}  className="object-contain " />
            <img src={planYourLesson}  className="object-contain -ml-36 -mt-12" />
          </div>
          <div className="mt-10">
            <CTAButton active={true} linkTo={'#'}>
              Learn more
            </CTAButton>
          </div>
        </div>

      </div>

      {/* section 3 */}
      <div className="mx-auto w-11/12 flex flex-col items-center max-w-maxContent p-4">
            <InstructorSection />
            <h1 className="text-3xl mt-20">Review from other learners</h1>
      </div> 

      {/* footer Section  */}
      <div className='w-full bg-richblack-800'>
        <Footer />

      </div>
    </div>
  );
}

export default Home;
