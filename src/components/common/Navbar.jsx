import React from 'react'
import {NavbarLinks} from '../../data/navbar-links'
import navLogo from '../../assets/Logo/Logo-Full-Light.png'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropdown from '../Auth/ProfileDropdown'

function Navbar() {
    const {user} = useSelector((state)=> state.profile);
    const {token} = useSelector((state)=> state.auth);
    const {totalItems} = useSelector((state)=> state.cart);

    const location = useLocation();
    function matchRoute(route){
        return matchPath({path:route},location.pathname);
    }
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between px-[5%] '>

        {/* navbar logo */}
        <Link to={'/'}>
        <img src={navLogo} width={160} height={46} />
        </Link>

        {/* navLinks  */}
        <nav>
            <ul className='flex gap-x-6 text-richblack-25'>
                {
                    NavbarLinks.map((link,index)=>(
                        <li key={index} >
                            {
                                link.title === 'Catalog' ? (<div></div>) : 
                                (
                                    <Link to={link?.path}>
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : 'text-richblack-25'}`}>{link.title}</p>
                                    </Link>
                                ) 
                            }
                        </li>
                    ))
                }
            </ul>

        </nav>

        {/* login/signup/dashboard  */}
        <div className='flex gap-x-4 items-center'>
            {
                user && user?.accountType != "Instructor" && (
                    <Link to={'/dashboard/cart'} className='relative'>
                        <FaShoppingCart color='richblack-25' />
                        {
                            totalItems > 0 && (
                                <span>{totalItems}</span>
                            )
                        }

                    </Link>
                    
                )

            }
            {
                token == null && (
                    <Link to={'/login'}>
                        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] rounded-md text-richblack-100'>Login</button>
                    </Link>
                    
                )
            }
            {
                token == null && (
                    <Link to={'/signup'}>
                        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] rounded-md text-richblack-100'>Sign up</button>
                    </Link>
                    
                )
            }
            {
                token != null && <ProfileDropdown />
            }
        </div>

        </div>

    </div>
  )
}

export default Navbar