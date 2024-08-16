
import React, { useState } from 'react';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:3400/signup', {name, email, password}).then(
            result => {console.log(result);
            navigate("/login");
        }).catch(err=> console.log(err))

    }


    return (
        <div className='SignupContainer bg-dark d-flex align-items-center justify-content-center w-100'>
            <div className="login">
                <h2 className='mb-3'>Signup Form</h2>
                <form onSubmit={handleSubmit} className='needs-validation'>
                
                    <div className="form-group was-validated mb-2">
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' className='form-control' required onChange={(e) => {setName(e.target.value)}}></input>
                        <div className="invalid-feedback">Please enter your name</div>
                    </div>

                    <div className="form-group was-validated mb-2">
                        <label htmlFor='email' className='form-label'>Email Address</label>
                        <input type='email' className='form-control' required onChange={(e) => {setEmail(e.target.value)}}></input>
                        <div className="invalid-feedback">Please enter your email</div>
                    </div>
                    <div className="form-group was-validated mb-2">
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' className='form-control' required onChange={(e) => {setPassword(e.target.value)}}></input>
                        <div className="invalid-feedback">Please enter your password</div>
                    </div>
                    <div className="form-group from-check mb-2">
                        <input type="checkbox" className='form-check-input'></input>
                        <label htmlFor='checkbox' className='form-check-label'>Remember me</label>
                    </div>

                    <button type='submit' className='btn btn-success w-100 mt-2'>SIGN UP</button>

                </form>

                <p>Already have an account?</p>
                <Link to="/login" type='submit' className='btn btn-success w-100 mt-2'>LOGIN</Link>


            </div>
        </div>
    );
}