import React, {useState} from 'react';
import Logo from '../assets/images/logo.png'

export default function Login() {
    const [sign, choice] = useState(false)

    function login() {
        choice(true)
    }

    function signup() {
        choice(false)
    }

    return (
        <div>
            <div className='loginCont'>
                <img className='logo' src={Logo}/>
                <div className='choice'>
                    <h1 className={sign === true ? 'active choiceName' : 'choiceName'}>Log In</h1>
                    <h1 className={sign === false ? 'active choiceName' : 'choiceName'}>Sign Up</h1>
                </div>
                <div className='choiceLine'/>
            {sign === true ? (
                <>
                        <h1 className='loginText'>Log in to continue.</h1>
                        <input placeholder='Username'/>
                        <input placeholder='Password'/>
                        <button className='logIn'>Log In</button>
                        <div className='divider'>
                            <div className='line'/>
                            <p className='dividerText'>or</p>
                            <div className='line'/>
                        </div>
                        <button className='else' onClick={signup}>Sign Up</button>
                        <a href='#'>RESET PASSWORD</a>

                </>
            ) : (
                <>
                        <h1 className='loginText'>Sign up to continue.</h1>
                        <input placeholder='Username'/>
                        <input placeholder='Password'/>
                        <button className='logIn'>Sign Up</button>
                        <div className='divider'>
                            <div className='line'/>
                            <p className='dividerText'>or</p>
                            <div className='line'/>
                        </div>
                        <button className='else' onClick={login}>Log In</button>
                        <a href='#'>RESET PASSWORD</a>
                </>
            )}          
            </div>
        </div>
    )
}