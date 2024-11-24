import React from 'react'

function CustomButton({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    type
}) {
  return (
    <button onClick={onClick} disabled={disabled} type={type} >
        children ? (
            <>
            <span>{text}</span>
            {children}
            </>
        ) : (text)
        
    </button>
  )
}

export default CustomButton