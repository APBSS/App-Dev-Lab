import React, { useEffect } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

    // Cleanup event listeners on component unmount
    return () => {
      signUpButton.removeEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.removeEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    };
  }, []);

  return (
    <div className='signin'>
      <div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Register</h1>
			
			<input type="text" placeholder="Username" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Register</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </div>
  );
};

export default SignIn;
