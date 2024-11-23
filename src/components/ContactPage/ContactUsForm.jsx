import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import {apiConnector} from '../../services/apiconnector';
import {contactusEndpoint} from '../../services/api';
import CountryCode from '../../data/countrycode.json';

function ContactUsForm() {
    const [loading,setLoading] = useState(false);
    const {register,handleSubmit,reset,formState:{errors,isSubmitSuccessful}} = useForm();

    const submitContactForm = async(data)=>{
        console.log("logging form data: ",data);
        
       try {
        setLoading(true);
        // const response = await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
        const response = "OK";
        console.log("contactUsForm Response: ",response);
        setLoading(false);
        
       } catch (error) {
            console.log("Error in Submitting contact form: ",error.message);
            setLoading(false);
        
       }


    }

    useEffect(()=>{
        reset({
            firstname:"",
            lastname:"",
            email:"",
            message:"",
            phoneNo:""
        });
    },[reset,isSubmitSuccessful])
  return (
    <form onSubmit={handleSubmit(submitContactForm)} className='flex flex-col gap-4'  >

<div className='flex gap-2' >
        <div className='flex flex-col '>
            <label htmlFor="firstname">First Name*</label>
            <input type="text" placeholder='Enter firstname' name="firstname" id='firstname'
            {...register("firstname",{required:true})}
            className='text-richblack-25 px-2 py-1 rounded bg-richblack-700'/>
            {
                errors.firstname && (<span className="text-sm italic">Please Enter your First Name</span>)
            }
            

        </div>
        <div className='flex flex-col'>
            <label htmlFor="lastname">Last Name*</label>
            <input type="text" placeholder='Enter lastname' name="lastname" id='lastname'
            {...register("lastname",{required:true})}
            className='text-richblack-25 px-2 py-1 rounded bg-richblack-700'/>
        </div>
        
        
        </div>
        {/* email */}
        <div className='flex flex-col'>
            <label htmlFor="email">Email*</label>
            <input type="text" placeholder='Enter your Email' name='email' id='email' 
            {...register("email",{required:true})}
            className='text-richblack-25 px-2 py-1 rounded bg-richblack-700'/>
             {
                errors.email && (<span>Please Enter your Email</span>)
            }

        </div>

        {/* phoneNo  */}
        <div>
            <label htmlFor="phonenumber">Phone Number*</label>
            <div className='flex justify-between items-center'>
                <select name='dropdown' id='dropdown' {...register("countryCode",{required:true})}
                 className='text-richblack-25 px-1 py-[6px] rounded bg-richblack-700 w-[15%]'>
                    {
                        CountryCode.map((element,index)=>(
                            <option key={index} value={element.code}>
                                {element.code} 

                            </option>
                        ))

                    }
                </select>
                <input type="number" placeholder='3172227226' name='phonenumber' id='phonenumber'
                className='text-richblack-25 px-2 py-1 rounded bg-richblack-700 w-[83%]' 
                    {...register("phoneNo",{
                        required:{value:true,"message":"please enter the phone number"},
                        maxLength:{value:10,"message":"phone number must not exceeds 10 digits"},
                        minLength:{value:10,"message":"phone number must be atleast 10 digits"}
                    })}
                />
                
            </div>
            {errors.phoneNo && <span className="text-sm">{errors.phoneNo.message}</span>}
        </div>


        {/* message  */}
        <div className='flex flex-col'>
            <label htmlFor="message">Message*</label>
            <textarea name='message' id='message' cols={30} rows={7} placeholder='Enter your message here..'
            {...register("message",{required:true})}
            className='text-richblack-25 px-2 py-1 rounded bg-richblack-700'/>
             {
                errors.message && (<span>Please Enter your Message</span>)
            }

        </div>

        <button type='submit' className='bg-yellow-100 rounded text-black p-1 font-bold'>Submit Form</button>
    </form>
  )
}

export default ContactUsForm