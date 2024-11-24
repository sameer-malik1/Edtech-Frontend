import React from 'react'
import CustomButton from './CustomButton'

function ConfirmationModal({modalData}) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        <h1 className="text-2xl font-semibold text-richblack-5">{modalData.modalHeading}</h1>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">{modalData.modalDescription}</p>
        <div className="flex items-center gap-x-4">
            <CustomButton text={modalData.btn1Text} onClick={modalData.btn1Handler} />
            <button onClick={modalData.btn2Handler}
            className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900">{modalData.btn2Text}</button>

        </div>
        </div>
    </div>
  )
}

export default ConfirmationModal