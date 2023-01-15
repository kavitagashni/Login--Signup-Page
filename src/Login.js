import React from 'react'
import './Login.css'

function Login() {
	return (
		<div className='Login'>
				<div>
					<input type="text" name="email" id="email" placeholder='Email Address' />
					<br /><br />
					<input type="text" name="passw" id="passw" placeholder='Passward' />
				</div>
				<button type="submit" className='submit'>LOGIN</button>
				<p className='forgot-pass'>Forgot Password?</p>
			<p className='log-with'>or login with</p>
			{/* Add Icons..... */}
			<div className='icons'>
				<a href="https://www.google.com/" target="_blank"><img className='icon' src='./images/google-logo.png' /></a>
				<a href="https://www.facebook.com/" target="_blank"><img className='icon' src='./images/facebook.png' /></a>
				<a href="https://twitter.com/i/flow/signup" target="_blank"><img className='icon' src='./images/twitter-logo.jpg' /></a>
			</div>
			<p className='no-account'>Don’t have an account?<span> Create new now!</span></p>
			<p className='no-account'>By signing up, you are agree with our <span>Terms & Conditions</span></p>
		</div>
	)
}

export default Login;