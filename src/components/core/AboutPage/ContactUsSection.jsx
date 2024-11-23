import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

function ContactUsSection() {
  return (
    <div className='flex flex-col items-center mt-14 mb-14'>
        <h1 className='text-2xl font-bold'>Get in Touch</h1>
        <p className='text-richblack-400 mb-7'>We'd love to hear from you, please fill out this form</p>
        <div>
            <ContactUsForm />
        </div>
    </div>
    
  )
}

export default ContactUsSection