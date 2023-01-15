import logo from './logo.svg';
import './App.css';
import Login from './Login';
import SignUp from './signUp';
import { useState } from 'react';

function App() {
// state used for toggle...........
  const [toggle, setToggle] = useState(true)

  return (
    <div className="App  page">
      <div className='box1'>
        <img src='./images/react-logo.png' className="react-logo" />
        <p className="perah">SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
      </div><br />
      <div className='heading'>
        <p onClick={()=>setToggle(!toggle)}>Login</p>
        <p onClick={()=>setToggle(!toggle)}>Signup</p>
      </div>
      {/* toggle used for login or signup page............ */}
      {
      toggle ? <Login />:<SignUp />
      }
    </div>
  );
}

export default App;
