import { useState } from 'react'
import { Route, Routes,BrowserRouter as Router } from "react-router-dom"
import LandingPage from './Components/LandingPage'
import Register from "./Components/Register"
import Login from './Components/Login'
import Profile from './Components/Profile'
function App() {
  

  return (
    <>
    <Router>
        
        
          {/* <div className="container"> */}
            <Routes>
              <Route exact path="/" element={<LandingPage/>}/>
                
              <Route exact path="/login" element={<Login  />}/>
          
              <Route exact path="/register" element={<Register />}/>
              
              <Route exact path="/profile" element={<Profile />}/>
              
              </Routes>
          {/* </div> */}
        </Router>
    </>
  )
}

export default App
