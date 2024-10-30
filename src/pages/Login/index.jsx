import React, { useState } from 'react';
import './styles.css';


const LoginForm = () => {
  const [loginemail, setEmail] = useState('');
  const [loginpassword, setPassword] = useState('');
  const [signupemail, setSignupemail] = useState('');
  const [signuppassword, setSignuppassword] = useState('');
  const [signupcnpassword, setSignupcnpassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setisLogin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!loginemail || !loginpassword) {
      setError('Both fields are required.');
      return;
    }
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);
    // Here you would typically send a request to your API for authentication
    console.log('Logging in with:', { loginemail, loginpassword });
    
    // Reset fields
    setEmail('');
    setPassword('');
    setError('');

  };
  const handleButtonClick = (button) =>{
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
      {isLogin === 'login'?
       <form onSubmit={handleSubmit} className='Formdiv'>
       <div className='field-container'>
         <label className='emailcartoon-effect moving-email'>Username:</label>
         <input 
           value={loginemail} 
           onChange={(e) => setEmail(e.target.value)} 
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
       <div style={{alignItems:'center'}}>
         <button type="submit" className='cartoon-button'>Login</button>
       </div>
       <div className='loged-user'onClick={() => handleButtonClick('signup')}>
        <p className='loged-text'>he he... I already used this😂</p>
       </div>
     </form>
      
      : <form onSubmit={handleSubmit} className='Formdiv'>
      <div className='field-container'>
        <label className='emailcartoon-effect moving-email'>User name:</label>
        <input 
          value={signupemail} 
          onChange={(e) => setSignupemail(e.target.value)} 
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
      <div style={{alignItems:'center'}}>
        <button type="submit" className='cartoon-button'>Sign Up</button>
      </div>
    </form>
    }
     
      
    </div>
    </div>
  );
};

export default LoginForm;
