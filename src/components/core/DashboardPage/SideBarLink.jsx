import React from 'react'
import * as Icons from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';


function SideBarLink({link,iconName}) {

    const Icon = Icons[iconName];
    const dispatch = useDispatch();
    const location = useLocation();

    function matchRoute(route){
        return matchPath({path:route},location.pathname)
    }
  return (
    <NavLink 
    to={link.path}
    className={`relative text-sm px-8 py-2 font-medium ${matchRoute(link.path) ? "bg-yellow-100" : "bg-opacity-0"}`}
    >
        <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}></span>
        <div className='flex items-center gap-x-2'>
            <Icon className="text-lg" />
            <span>{link.name}</span>
        </div>

    </NavLink>
  )
}

export default SideBarLink