import React, { useEffect, useState } from 'react'
import {NavbarLinks} from '../../data/navbar-links'
import navLogo from '../../assets/Logo/Logo-Full-Light.png'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";


import { categories } from '../../services/api'
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios'
import ProfileDropdown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'

const subLinks = [{title:"python",path:"/course/python"},{title:"Java",path:"/course/java"},]

function Navbar() {
    const {user} = useSelector((state)=> state.profile);
    const {token} = useSelector((state)=> state.auth);
    const {totalItems} = useSelector((state)=> state.cart);
    const [ssubLinks,setSsubLinks] = useState([]);

    const location = useLocation();

    const fetchCategories = async () => {
        try {
            const result = await apiConnector('GET',categories.CATEGORIES_API);
            // const result = await axios.get('http://localhost:3000/api/v1/course/showAllCategories');
           
            console.log("category_list_Data: ",result.data);
            setSsubLinks(result.data.data);

            
        } catch (error) {
            console.log(error);
            console.log("Error while fetching categories");
            
        }
    }

    useEffect(()=>{
        fetchCategories();
    },[]);

    

    function matchRoute(route){
        return matchPath({path:route},location.pathname);
    }
    console.log("token after login: ",token);
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
                                link.title === 'Catalog' ? (<div className='relative group flex items-center gap-1'>
                                    <p>{link.title}</p>
                                    <IoIosArrowDown />
                                    <div className='invisible absolute left-[50%] top-[-100%] translate-x-[-50%] translate-y-[80%] 
                                     flex flex-col lg:w-[250px] p-3 rounded bg-richblack-25 opacity-0 group-hover:visible group-hover:opacity-100'>
                                    <div className='absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] w-5 h-5 bg-richblack-25  rotate-45'></div>

                                        {
                                            subLinks?.map((link,index)=>(
                                                <Link key={index} to={Link?.path}><p className='text-richblack-800'>{link?.title}</p></Link>
                                            ))
                                        }
                                    </div>
                                </div>) : 
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