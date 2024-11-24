import React, { useState } from 'react';
import {sidebarLinks} from "../../../data/dashboard-links"
import {logout} from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from 'react-redux';
import SideBarLink from './SideBarLink';
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from '../../common/ConfirmationModal';
import { useNavigate } from 'react-router-dom';


function SideBar() {
    const {loading:authLoading} = useSelector(state => state.auth);
    const {user,loading:profileLoading} = useSelector(state => state.profile);
    const [confirmationModal,setConfirmationModal] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if(profileLoading || authLoading){
        return <div className='mt-10'>Loading ...</div>
    }
  return (
    <div className='flex flex-col min-w-[220px] bg-richblack-800 border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)]'>
      {
        sidebarLinks.map((link)=> {
          if(link.type && user?.accountType !== link.type) return null;
           return <SideBarLink key={link.id} link={link} iconName={link.icon}/> 
        })
      }

      <div className='h-[1px] bg-richblack-700 mb-6 mt-6'></div>

      <div className='flex flex-col'>
        <SideBarLink link={{name:"Settings",path:"/dashboard/settings"}} iconName="VscSettingsGear"/>
        <button onClick={()=>setConfirmationModal({
            modalHeading: "Are you sure ?",
            modalDescription: "you will be logged out of your Account.",
            btn1Handler: ()=>(dispatch(logout(navigate))),
            btn2Handler: ()=>(setConfirmationModal(null)),
            btn1Text: "Logout",
            btn2Text:"Cancel"
        })}
        className='text-lg px-8 py-2 font-medium text-richblack-300'>
          <div className='flex items-center gap-2'>
            <VscSignOut />
            <span className='text-sm'>Logout</span>

          </div>

        </button>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  )
}

export default SideBar