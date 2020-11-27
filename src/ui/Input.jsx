import React, { Fragment } from 'react'

export default function Input({idInput, typeInput, LabelName, placeholder}) {
    return (
        <Fragment>
             <label for={idInput} className="sr-only">{LabelName}</label>
             <input type={typeInput} id={idInput} className="form-control" placeholder={placeholder} required />
        </Fragment>
    )
}
