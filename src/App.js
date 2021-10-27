//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const [buttonTxt, setbuttonTxt] = useState('Enable Dark Mode');

    const showAlert = (massage,type)=> 
    {
      setAlert({
        msg: massage,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

    const toggleMode = ()=> {
      if(mode === 'dark')
      {
        setMode('light');
        setbuttonTxt('Enable Dark Mode');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has beed enabled!", "success");

      }else
      {
        setMode('dark');
        setbuttonTxt('Enable Light Mode');
        document.body.style.backgroundColor = '#212529';
        showAlert("Dark mode has beed enabled!", "success");
      }
      
   }

  return (
   
    <>
    <Router> 
  <Navbar title="TextUtils" mode={mode} buttonTxt={buttonTxt} toggleMode={toggleMode} AboutText = "About" />
  <Alerts alerts ={alert} />
  <div className="container my-8" >
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode} />
          </Route>
        </Switch>
       
  {/* <About/> */}
  </div>
  </Router>

    </>
    
   
  );
}

export default App;
