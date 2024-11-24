import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';
import { FiEdit } from "react-icons/fi";

function MyProfile() {
    const {user} = useSelector((state)=>state.profile);
    const navigate = useNavigate();

  return (
    <div className='w-[70%] mx-auto'>

        <h1 className='text-3xl mb-4 font-medium'>My Profile</h1>
        {/* section 1  */}
        <div className='flex justify-between items-center bg-richblack-800 rounded-md px-8 py-8 border-[1px] border-richblack-700'>
            <div className='flex gap-3 place-items-center'>
                <img src={user?.image} alt="profile_image" className='aspect-square w-[78px] object-cover rounded-full' />
                <div>
                    <p className='text-2xl'>{user?.firstName + " " + user?.lastName}</p>
                    <p className='text-sm text-richblack-600'>{user?.email}</p>
                </div>


            </div>
            <CustomButton text={"Edit"} onClick={()=> navigate("dashboard/settings")}>
                <FiEdit />
            </CustomButton>
        </div>
        {/* section 2  */}
        <div className='flex justify-between items-start mt-8 bg-richblack-800 rounded-md px-8 py-8 border-[1px] border-richblack-700'>
            <div className='flex flex-col gap-4 '>
                
               
                    <p className='text-2xl'>About</p>
                    <p className='text-sm text-richblack-600'>{
                        user?.about ? user.about : "Write something about yourself"
                        }</p>
               


            </div>
            <CustomButton text={"Edit"} onClick={()=> navigate("dashboard/settings")}>
                <FiEdit />
            </CustomButton>
        </div>

        {/* section 3 */}
        <div className='flex justify-between items-start mt-8 bg-richblack-800 rounded-md px-8 py-8 border-[1px] border-richblack-700'>
            <div className='flex flex-col gap-3 '>
                
               
                    <p className='text-2xl'>Personal Details</p>
                    <div className='grid grid-cols-2 gap-x-20 gap-y-6'>
                        <div>
                            <p className='text-sm text-richblack-700'>First Name</p>
                            <p className='text-lg text-richblack-25'>{user?.firstName}</p>
                        </div>
                        <div>
                            <p className='text-sm text-richblack-700'>Last Name</p>
                            <p className=' text-lg text-richblack-25'>{user?.lastName}</p>
                        </div>
                        <div>
                            <p className='text-sm text-richblack-700'>Email</p>
                            <p className='text-lg text-richblack-25'>{user?.email}</p>
                        </div>
                        <div>
                            <p className='text-sm text-richblack-700'>Contact</p>
                            <p className=' text-lg text-richblack-25'>{user?.contactNumber ? user?.contactNumber : "Add your cell number"}</p>
                            
                        </div>
                        <div>
                            <p className='text-sm text-richblack-700'>Gender</p>
                            <p className='text-lg text-richblack-25'>{user?.additionalDetails.gender ? user?.additionalDetails.gender : "Mention Gender" }</p>
                        </div>
                        <div>
                            <p className='text-sm text-richblack-700'>Date of Birth</p>
                            <p className=' text-lg text-richblack-25'>{user?.additionalDetails.dateOfBirth ? user?.additionalDetails.dateOfBirth : "Add your Date of Birth"}</p>
                        </div>

                    </div>
               


            </div>
            <CustomButton text={"Edit"} onClick={()=> navigate("dashboard/settings")}>
                <FiEdit />
            </CustomButton>
        </div>
    </div>
  )
}

export default MyProfile