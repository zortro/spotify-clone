import React from 'react';

export default function Login() {
    return (
        <div>
            <div className='loginCont'>
                <h1>Log in to continue.</h1>
                <input/>
                <input/>
                <button>Log In</button>
                <div className='line'/>
                <p>or</p>
                <div className='line'/>
                <button>Sign Up</button>
                <button>RESET PASSWORD</button>
            </div>
        </div>
    )
}