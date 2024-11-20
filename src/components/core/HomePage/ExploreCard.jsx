import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";

function ExploreCard({ title, description }) {
  return (
    <div className="relative flex flex-col gap-5 w-[30%] h-[250px]  p-2 bg-richblack-800">
      <h1 className="font-bold">{title}</h1>
      <p className="text-pure-greys-300">{description}</p>
      <div className="absolute bottom-0 w-full flex justify-between border-t-[1px] border-pure-greys-300 border-dashed left-0">
        <div className="flex gap-2 items-center p-2">
          <MdPeopleAlt /> Begginers
        </div>
        <div className="flex gap-2 items-center p-2">
          <RiOrganizationChart /> Lessons
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
