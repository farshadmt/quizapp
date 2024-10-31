import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginForm from './pages/Login';

function App() {
  const [pageRender,Setpagerender] = useState(true);
  return (
    <div className="App"> 
    {pageRender?<LoginForm Setpagerender={Setpagerender}/>:<Home />}     
        
        
    </div>
  );
}

export default App;
