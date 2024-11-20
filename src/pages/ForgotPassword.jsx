import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getPasswordResetToken } from '../services/operations/authAPI';

function ForgotPassword() {
    const [emailSent,setEmailSent] = useState(false);
    const [email,setEmail] = useState("");
    const {loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();


    console.log("forgot-password component rendered");

    function handleOnSubmit(e){
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));

    }

  return (
    <div className='flex justify-center items-center text-red'>
        {
            loading ? (<div>Loading ...</div>) : 
            (
                <div>
                    <h1>
                        {
                            !emailSent ? "Reset your Password" : "Check your Mail"
                        }
                    </h1>

                    <p>
                        {
                            !emailSent ? "Have no fear, we'll email you instruction to reset your password. If you don't have email we can try account recovery" :
                            `We have sent the reset email to ${email}`
                        }
                    </p>

                    <form onSubmit={handleOnSubmit}>
                        {
                            !emailSent && (
                                <label >
                                    <p>Email Address*</p>
                                    <input className='text-black' type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required  />
                                </label>
                            )
                        }
                        <button type='submit'>
                            {
                                !emailSent ? "Reset Password" : "Resent Email"
                            }
                        </button>
                    </form>
                </div>
            )


        }
    </div>
  )
}

export default ForgotPassword