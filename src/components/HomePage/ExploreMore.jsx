import React, { useState } from "react";
import HighlightText from "./HighlightText";
import ExploreCard from "./ExploreCard";
import { HomePageExplore } from "../../data/homepage-explore";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

function ExploreMore() {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCard = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag == value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-4xl font-semibold">
        Unlock the <HighlightText text={"Power of Code"} />
      </div>
      <p className="text-richblack-300 mt-2">
        Learn to Build Anything You Can Imagine
      </p>
      <div className="flex flex-row items-center h-[40px]  justify-around w-[60%] gap-3 bg-richblack-800 px-1 py-1 mt-2 rounded-full">
        {tabsName.map((tab, index) => {
          return (
            <div
              key={index}
              className={`text-[16px] ${
                tab == currentTab
                  ? "bg-richblack-900 text-pure-greys-5 rounded-full -mx-2  px-3 py-1"
                  : "text-richblack-200"
              } cursor-pointer transition-all duration-100`}
              onClick={() => setMyCard(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex">
        <ExploreCard
          title={"Learn HTML"}
          description={
            "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more."
          }
        />
      </div>
    </div>
  );
}

export default ExploreMore;
