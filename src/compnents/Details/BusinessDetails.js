import React from 'react';
import '../Greneral.css';
import {Link} from 'react-router-dom';

function BusinessDetails() {
    return (
        <div className='BusinessDetailsContainer'>
            <span className='headingText'>Business Details</span><hr/>
            <div className='div1'>
                <span className='label'>Company Name:</span><input type='text' required className='input'/>
            </div>
            <div className='div1'>
                <span className='label'>Type:</span><input type='text' required className='input'/>
            </div>
            <div className='div1'>
                <span className='label'>Phone:</span><input type='text' required className='input'/>
            </div>
            <div className='div1'>
                <span className='label'>Year of completion:</span><input type='text' required className='input'/>
            </div>
            <div className='div1'>
                <span >Business Address:</span>
                <span className='label'>Address 1:</span><input type='text'className='input' />
                <sapn className='label'>Address 2:</sapn><input type='text' className='input'/>
                <span className='label'>City:</span><input type='text' className='input'/>
                <span className='label'>Pincode:</span><input type='text'className='input' />
                <span className='label'>Country:</span><input type='text'className='input' />
            </div>
            <div>
                <Link to={'/PersonalDetails'} style={{color:'white',textDecoration:'none'}}><button className='prevButton'>Pervious</button></Link>
                <Link to={'/AccountDetails'} style={{color:'white',textDecoration:'none'}}><button className='nextButton'>Next</button></Link>
            </div>
        </div>
    )
}

export default BusinessDetails;