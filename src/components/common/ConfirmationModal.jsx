import React from 'react'
import CustomButton from './CustomButton'

function ConfirmationModal({modalData}) {
  return (
    <div>
        <h1>{modalData.heading}</h1>
        <p>{modalData.modalDescription}</p>
        <div>
            <CustomButton onClick={modalData.bt1Handler} text={modalData.bt1Text}/>
            <button onClick={modalData.btn2Handler}>{modalData.btn2Text}</button>

        </div>
    </div>
  )
}

export default ConfirmationModal