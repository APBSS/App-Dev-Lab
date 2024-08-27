import React, { useEffect,useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
const SignIn = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
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

  const cancelLogout = () => {
    setIsLogoutModalOpen(false);
  };
  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };
  
  return (
    <div className='signin'>
      <div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#" >
			<h1>Register</h1>
			
			<input type="text" placeholder="Username" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button onClick={handleLogoutClick}>Register</button>
		</form>
	</div>
	<div class="form-container sign-in-container" id='signin'>
		<form action="#">
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<Link to="/dashboard1"><button>Sign In</button></Link>
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
{/* Logout Confirmation Modal */}
{isLogoutModalOpen && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
			<CloseIcon onClick={cancelLogout} style={{marginLeft:290,cursor:"pointer"}}/>
		  <h2>You are Registered</h2>
		  <p>Go to Sign In page</p>
            <div className="modal-buttons">
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
