import React from 'react';
import '../Greneral.css';
import {Link} from 'react-router-dom';

function AccountDetails() {
    return (
        <div className='AccountDetailsContainer'>  
            <span className='headingText'>Bank Details</span><hr/>
            <div>
                <span className='label'>Bank Name:</span>
                <input type='type' className='input'/>
            </div>
            <div>
                <span className='label'>Account Number:</span>
                <input type='type' className='input'/>
            </div>
            <div>
                <span className='label'>Account Type:</span>
                <input type='type' className='input'/>
            </div>
            <div>
                <span className='label'>IFSC Code:</span>
                <input type='type' className='input'/>
            </div>
            <div>
                <Link to={'/BusinessDetails'} style={{color:'white',textDecoration:'none'}}><button className='prevButton'>previous</button></Link>
                <Link to={'/Home'} style={{color:'white',textDecoration:'none'}}><button className='nextButton'>Save</button></Link>
            </div>
        </div>

    )
}

export default AccountDetails