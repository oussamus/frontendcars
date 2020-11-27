import React from 'react'
import Button from '../../ui/Button'
import Form from '../../ui/Form'

export default function Login() {
    return (
        <div className="text-center mt-4">
            <form className="form-signin">
                <Form textAuth="Please Sign in"
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
                <Button typeButton="submit" name="Sign in" />
                <p>
                    Create Account <a href="#">Register</a>
                </p>
            </form>
        </div>
    )
}
