import React from 'react'
import './Greneral.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <form>
                <div className='headingText'>Login</div>
                <div className='div1'>
                    <span className='label'>Username*:</span><input type='text' placeholder='e.g. Nency129' required className='input' />
                </div>
                <div className='div1'>
                    <span className='label'>Email*:</span><input type='Email' placeholder='e.g. abc@gmail.com' required className='input' />
                </div>
                <div className='div1'>
                    <span className='label'>password*:</span><input type='password' required className='input' />
                </div>
                <div className='div1'>
                    <span className='label'>Confirm password*:</span><input type='password' required className='input' />
                </div>
                <div>
                    <Link to='/PersonalDetails' style={{ color: 'white', textDecoration: 'none' }}><button className='Button'>Create an Account</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Login