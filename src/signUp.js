
import React from 'react'

function SignUp() {
    return (
        <div>
            <div>
                <input className="input" type="text" placeholder='Full Name' /><br /><br />
                <input className="input" type="email" placeholder='Email' /><br /><br />
                <input className="input" type="password" placeholder='Password'/>
            </div>
            <button className="submit" type="submit">SUBMIT</button><br/><br/>
            <p className='no-account'>Already registerde <span>sign in?</span></p>
            <p className='no-account'>By signing up, you are agree with our <span>Terms & Conditions</span></p>
        </div>
    )
}

export default SignUp;