import React from 'react'
import Button from '../../ui/Button'
import Form from '../../ui/Form'

export default function Register() {
    return (
        <div className="text-center mt-4">
            <form className="form-signin">
                <Form 
                      typeInput="text"
                      placeholder="First Name"
                      LabelName="First Name"
                      idInput="idFirstName"
                />
                 <Form 
                      typeInput="text"
                      placeholder="Last Name"
                      LabelName="Last NAME"
                      idInput="idLastNAME"
                />
                <Form 
                      typeInput="email"
                      placeholder="Enter Your Email"
                      LabelName="Email"
                      idInput="idEmail"
                />
                 <Form 
                      typeInput="password"
                      placeholder="Enter Your Password"
                      LabelName="Password"
                      idInput="idPassword"
                />
                <Button typeButton="submit" name="Sign up" />
            </form>
        </div>
    )
}
