import React from 'react'
import HighlightText from '../../common/HighlightText';
import Button from '../../common/Button';

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];



function LearningGrid() {
  return (
    <div className='grid  grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-[70%] lg:m-auto'>
      {
        LearningGridArray.map((card,index)=> (
          <div key={index} 
            className={` p-4 
              ${index ==0 && "lg:col-span-2 lg:bg-richblack-900" } 
              ${card.order % 2 == 1 ? "bg-richblack-700 " : "bg-richblack-800 "}
              ${card.order == 3 && "lg:col-start-2 "}`}
          >
            {
              card.order < 0 ? 
              (<div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold'>
                  <h1 >{card.heading}</h1>
                  <HighlightText text={card.highlightText} />
                </div>
                <p className='text-sm mt-1 mb-2 text-left'>{card.description}</p>
                <div>
                  <Button linkTo={card.BtnLink} active={true}>{card.BtnText}</Button>
                </div>
              </div>)
              :
              (<div className='flex flex-col gap-3'>
                <h1 className='text-md font-bold'>{card.heading}</h1>
                <p className='text-richblack-400'>{card.description}</p>
              </div>)
            }

          </div>
        ))
      }
    </div>
  )
}

export default LearningGrid