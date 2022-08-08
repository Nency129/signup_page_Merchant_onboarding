import React from 'react'
import '../Greneral.css'
import {Link} from 'react-router-dom';

const PersonalDetails = () => {
    return (
        <div className='PersonalDetailsContainer'>
            <div className='headingText'>Personal Details</div> <hr/>
            <div className='div1'>
                <span>Full Name</span>
                <span className='label'>First Name:</span><input type='text' required className='input'/>
                <span className='label'>Last Name:</span><input type='text' required className='input'/>
            </div>
            <div className='div1'>
                <span className='label'>DOB:</span><input type='text' required className='input'/>
            </div>
            <div className='div1'>
                <span className='label'>Phone:</span><input type='text' required className='input'/>
            </div>
            <div className='div1'>
                <span >Gender:</span>
                <input type='radio'/><span className='radiotext'>Male</span>
                <input type='radio'/><span className='radiotext'>Female</span>
            </div>
            <div>
                <Link to={'/BusinessDetails'} style={{color:'white',textDecoration:'none'}}><button className='nextButton'>Next</button></Link>
            </div>

        </div>
    )
}

export default PersonalDetails;