
import React from 'react';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  return (
    <div className='SignupContainer bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className="login">
            <h2 className='mb-3'>Signup Form</h2>
            <form className='needs-validation'>
            
                <div className="form-group was-validated mb-2">
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input type='email' className='form-control' required></input>
                    <div className="invalid-feedback">Please enter your email</div>
                </div>
                <div className="form-group was-validated mb-2">
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' className='form-control' required></input>
                    <div className="invalid-feedback">Please enter your password</div>
                </div>
                <div className="form-group from-check mb-2">
                    <input type="checkbox" className='form-check-input'></input>
                    <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
                </div>

                <button type='submit' className='btn btn-success w-100 mt-2'>SIGN UP</button>

            </form>

        </div>
    </div>
  );
}