import React from 'react'
import Button from './Button'
import Input from './Input'

export default function Form({textAuth, idInput, typeInput, placeholder, LabelName}) {
    return (
        <>
        <h1 className="h3 mb-3 font-weight-normal">{textAuth}</h1>
        <Input idInput={idInput} typeInput={typeInput} placeholder={placeholder} LabelName={LabelName}/>
        </>
    )
}

