import CommonForm from '@/components/common/form'
import { registerFormControls } from '@/config';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
const initialState = {
  userName: "",
  email: "",
  password: "",
};
function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  function onSubmit(){
    
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}/>
    </div>
  )
}

export default AuthRegister