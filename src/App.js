import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';  
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom"


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message,type) => {
    setAlert ({
      message: message,
      type: type
    })
    setTimeout(() => {
    setAlert('null')
    }, 1300);
   
  } 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#050100';
      document.body.style.color = 'white';
      showAlert("Dark mode is enabled", "success")
      document.getElementById('textMode').innerHTML= "Enable light Mode";
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enabled", "success")
      document.getElementById('textMode').innerHTML= "Enable Dark Mode";
    }
  }
  return (
    <>
   
      
  
    
   
   
   
   
    <BrowserRouter>
    <Navbar title="TextMaster" mode={mode} toggleMode={toggleMode}  />
    <Alert  alert={alert}/>
    <div className="container my-3">
<Routes>  

     <Route path='/' element={<TextForm showAlert={showAlert} heading='TextUtlity-A Very Useful Text Utility' mode={mode}/>}></Route> 
      <Route path='about' element={<About mode={mode}/> }> </Route>
        
    
 </Routes>

   </div> 

   </BrowserRouter>
    </> 
  );
}

export default App;