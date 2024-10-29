import React, { useState } from 'react';
import './styles.css';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

  return (
    <div className="page-div">
    <div className="login-form">
      <div className="title-name">
        <div className='cartoon-effect'>Welcome to </div>
        <div className='cartoon-effect'>BrainBuzzer</div>
      </div> 
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className='Formdiv'>
        <div className='field-container'>
          <label className='emailcartoon-effect'>Email:</label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className='Input-style'
          />
        </div>
        <div className='field-container'>
          <label className='emailcartoon-effect'>Password:</label>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className='Input-style'
          />
        </div>
        <div style={{alignItems:'center'}}>
          <button type="submit" className='cartoon-button'>Login</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
