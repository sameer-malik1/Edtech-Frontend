import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';

function UpdatePassword() {

    const {loading} = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);

    const [formData,setFormData] = useState({
        password:"",
        confirmPassword:""
    })
    function handleOnChange(e){
        setFormData((prev)=> ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    function handleOnSubmit(e){
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(formData.password,formData.confirmPassword,token));

    }
  return (
    <div>
        {
            loading ? (<div>Loading ...</div>) :
            (
                <div>
                    <h1>Choose new Password</h1>
                    <p>Almost Done, Enter a new Password and you're all set.</p>
                    <form onSubmit={handleOnSubmit}>
                        <label>
                            <p>New Password*</p>
                            <input type={showPassword ? "text" : "password"}
                                required
                                placeholder='Enter new Password'
                                name='password'
                                value={FormData.password}
                                onChange={handleOnChange}
                                className='text-black'
                                 />

                        </label>
                        <label>
                            <p>Confirm Password*</p>
                            <input type={showConfirmPassword ? "text" : "password"}
                                required
                                placeholder='Enter Confirm Password'
                                name='confirmPassword'
                                value={FormData.confirmPassword}
                                onChange={handleOnChange}
                                className='text-black'
                                 />

                        </label>
                        <button type='submit'>
                            Reset Password
                        </button>
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default UpdatePassword