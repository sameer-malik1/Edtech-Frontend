import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { Link, useNavigate } from 'react-router-dom';

function VerifyEmail() {
    const [otp,setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {signupData,loading} = useSelector(state => state.auth);
    function handleOnSubmit(e){
        console.log("verify email clicked");
        e.preventDefault();

        const {firstName,lastName,email,accountType,password,confirmPassword} = signupData;
        console.log("signup_data: ",signupData);

        dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
        console.log("signup function executed:");

    }

    useEffect(()=>{
        if(!signupData){
            navigate('/signup');
        }
    },[])
  return (
    <div>
        {
            loading ? (<div>Loading ...</div>) :
            (
                <div className='flex flex-col items-center justify-center text-white'>
                    <h1>Verify Email</h1>
                    <p>A Verification code has been sent to you. Enter the code below</p>
                    <form onSubmit={handleOnSubmit}>
                        <OTPInput
                        numInputs={6}
                        value={otp}
                        onChange={setOtp}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} className="bg-richblack-800" />}
                        
                         
                        
                        />


                        <button type='submit'>
                            Verify Email
                        </button>
                    </form>
                    <div>
                        <Link to='/login'>back to login</Link>
                        <button onClick={()=> dispatch(sendOtp(signupData.email))}>Resend OTP</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default VerifyEmail