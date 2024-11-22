import React from 'react'


const stats = [
    {count:"5k",label:"Active Students"},
    {count:"10+",label:"Mentors"},
    {count:"200+",label:"Courses"},
    {count:"50+",label:"Awards"},
]
function StatsComponent() {
  return (
    <div className='bg-richblack-800 py-16 my-20'>
        <div className=' flex justify-between items-center lg:w-[60%] lg:m-auto' >
        {
            stats.map((data,index)=> (
                <div className='flex flex-col items-center gap-1' key={index}>
                    <h1 className='text-3xl font-bold'>{data.count}</h1>
                    <h2 className='text-richblack-400'>{data.label}</h2>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default StatsComponent