import React,{useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Text from './components/Text';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  
  // const [alert, setalert]=useState(null)
  // const showAlert = (massage,type)=>{
    //   setalert({
      //     msg : massage,
      //     type : type
      //   })
      // }
      
  const [mode, setMode]=useState('light')
  const [bgColor, setBgColor]=useState('white')
  const [txtColor,setTxtColor]=useState('black')
  
  const darkMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#24074b';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
    if(bgColor==='white'){
      setBgColor('black');
    }
    else{
      setBgColor('white');
    }
    if(txtColor==='black'){
      setTxtColor('white');
    }
    else{
      setTxtColor('black');
    }
    
  }

  
  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} darkMode={darkMode}/>
<Routes>
    <Route path="/" element={<Text txtColor={txtColor} />}/>
    <Route  path="/About" element={<About  bgColor={bgColor} txtColor={txtColor}/>}/>
    <Route path="/SignIn" element={<SignIn bgColor={bgColor} txtColor={txtColor}/>}/>
    <Route path="/SignUp" element={<SignUp bgColor={bgColor} txtColor={txtColor}/>}/>
    
</Routes>
          

    </BrowserRouter>
      
      
      
    </>

  );
}

export default App;
