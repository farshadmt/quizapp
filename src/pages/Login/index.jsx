import React, { useState } from 'react';
import './styles.css';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setisLogin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);
    // Here you would typically send a request to your API for authentication
    console.log('Logging in with:', { email, password });
    
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
    <div className="login-form">
      <div className="title-form">
        <button className={`cartoon-form-button ${isLogin=='login' ? 'active' : ''}`} onClick={() => handleButtonClick('login')}>Login</button>    
        <button className={`cartoon-form-button ${isLogin == 'signup' ? 'active' : ''}`} onClick={() => handleButtonClick('signup')}>Sign Up</button>
      </div> 
      <div className="title-name">
        <div className='cartoon-effect shaking-name'>Welcome to </div>
        <div className='cartoon-effect shaking-name'>BrainBuzzer</div>
      </div> 
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLogin == 'login'?
       <form onSubmit={handleSubmit} className='Formdiv'>
       <div className='field-container'>
         <label className='emailcartoon-effect moving-email'>Username:</label>
         <input 
           value={email} 
           onChange={(e) => setEmail(e.target.value)} 
           required 
           className='Input-style'
         />
       </div>
       <div className='field-container'>
         <label className='emailcartoon-effect moving-password'>Password:</label>
         <input 
           value={password} 
           onChange={(e) => setPassword(e.target.value)} 
           required 
           className='Input-style'
           type='password'
         />
       </div>
       <div style={{alignItems:'center'}}>
         <button type="submit" className='cartoon-button'>Login</button>
       </div>
     </form>
      
      : <form onSubmit={handleSubmit} className='Formdiv'>
      <div className='field-container'>
        <label className='emailcartoon-effect moving-email'>User name:</label>
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className='Input-style'
        />
      </div>
      <div className='field-container'>
        <label className='emailcartoon-effect moving-password'>Password:</label>
        <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className='Input-style'
          type='password'
        />
      </div>
      <div className='field-container'>
        <label className='emailcartoon-effect moving-cnfrmpassword'>Confirm Password:</label>
        <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
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
