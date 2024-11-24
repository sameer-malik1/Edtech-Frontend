import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';

function MyProfile() {
    const {user} = useSelector((state)=>state.profile);
    const navigate = useNavigate();

  return (
    <div>

        <h1>My Profile</h1>
        {/* section 1  */}
        <div>
            <div>
                <img src={user?.image} alt="profile_image" className='aspect-square w-[78px] object-cover' />
                <div>
                    <p>{user?.firstName + " " + user?.lastName}</p>
                    <p>{user?.email}</p>
                </div>


            </div>
            <CustomButton text={"Edit"} onClick={()=> navigate("dashboard/settings")}/>
        </div>
    </div>
  )
}

export default MyProfile