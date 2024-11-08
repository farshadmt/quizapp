import React, { useState } from 'react';
import './styles.css';
import boy from "../../assets/validationboy.png"
import fetchApi from "../../api/Login/index"

const LoginForm = ({Setpagerender}) => {
  const [loginusername, setUsername] = useState('');
  const [loginpassword, setPassword] = useState('');
  const [signupusername, setSignupusername] = useState('');
  const [signuppassword, setSignuppassword] = useState('');
  const [signupcnpassword, setSignupcnpassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setisLogin] = useState('login');

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*\d).{6,}$/;
    return passwordRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    // Basic validation
    if (!loginusername || !loginpassword) {
      setError('Both fields are required.');
      return;
    }
    if (validatePassword(loginpassword)) {
      // Handle successful submission
      console.log('Password is valid:', loginpassword);
      setError('');
      debugger;
      const response = fetchApi(loginusername,loginpassword)
      if (response.message){
        debugger;
        Setpagerender(false);
      }
      else{

      }
      
    } else {
      setError('Password must be at least 6 characters long and contain at least one number.');
    }
    
    console.log('Logging in with:', { loginusername, loginpassword });
    

  };
  const handleButtonClick = (button) => {
    setisLogin(button);
  };


  return (
    <div className="page-div">
      <div className={`login-form ${isLogin === 'login' ? 'active' : ''}`}>
        <div className="title-form">
          <button className={`cartoon-form-button ${isLogin === 'login' ? 'active' : ''}`} onClick={() => handleButtonClick('login')}>Login</button>
          <button className={`cartoon-form-button ${isLogin === 'signup' ? 'active' : ''}`} onClick={() => handleButtonClick('signup')}>Sign Up</button>
        </div>
        <div className="title-name">
          <div className='cartoon-effect shaking-name'>Welcome to </div>
          <div className='cartoon-effect shaking-name'>BrainBuzzer</div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLogin === 'login' ?
          <form onSubmit={handleSubmit} className='Formdiv'>
            <div className='field-container'>
              <label className='emailcartoon-effect moving-email'>Username:</label>
              <input
                value={loginusername}
                onChange={(e) => setUsername(e.target.value)}
                required
                className='Input-style'
              />
            </div>
            <div className='field-container'>
              <label className='emailcartoon-effect moving-password'>Password:</label>
              <input
                value={loginpassword}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='Input-style'
                type='password'
              />
            </div>
            <div style={{ alignItems: 'center' }}>
              <button type="submit" className='cartoon-button'>Login</button>
            </div>
            <div className='loged-user' onClick={() => handleButtonClick('signup')}>
              <p className='loged-text'>he he... I'm new Here😂</p>
            </div>
          </form>

          : <form onSubmit={handleSubmit} className='Formdiv'>
            <div className='field-container'>
              <label className='emailcartoon-effect moving-email'>User name:</label>
              <input
                value={signupusername}
                onChange={(e) => setSignupusername(e.target.value)}
                required
                className='Input-style'
              />
            </div>
            <div className='field-container'>
              <label className='emailcartoon-effect moving-password'>Password:</label>
              <input
                value={signuppassword}
                onChange={(e) => setSignuppassword(e.target.value)}
                required
                className='Input-style'
                type='password'
              />
            </div>
            <div className='field-container'>
              <label className='emailcartoon-effect moving-cnfrmpassword'>Confirm Password:</label>
              <input
                value={signupcnpassword}
                onChange={(e) => setSignupcnpassword(e.target.value)}
                required
                className='Input-style'
                type='password'
              />
            </div>
            <div style={{ alignItems: 'center' }}>
              <button type="submit" className='cartoon-button'>Sign Up</button>
            </div>
          </form>
        }
      </div>
      {error &&
        <div className='validation-section'>
          <div style={{ backgroundColor: 'white',borderRadius:'20px',padding:'2px 2px 2px 2px'}}>
          <div> {error && <p className='errormessage'>{error}</p>} </div>
          </div>
          
          <img src={boy} alt='validation' className='validation-message'/>
        </div>
       
      }
    </div>
  );
};

export default LoginForm;
