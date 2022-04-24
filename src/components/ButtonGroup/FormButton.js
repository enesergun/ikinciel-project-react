import React from 'react'

const FormButton = ({content, handleSubmit}) => {
  return (
    <div className="formGroup">
        
        <button className="registerButton" type='submit' onClick={handleSubmit}>{content}</button>
    </div>
  )
}

export default FormButton