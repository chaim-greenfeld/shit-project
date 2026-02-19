
import {Routes, Route} from 'react-router'

import HomePage from './pages/HomePage'
import SubmitComplaintPage from './pages/SubmitComplaintPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminComplaintsPage from './pages/AdminComplaintsPage'

import './App.css'
import { useState } from 'react'

function App() {
  // const [token, setToken] = useState("")

  return (
    <>
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/submit' element={<SubmitComplaintPage/>}/>
        
        <Route path='/adminloginpage' element={<AdminLoginPage        />}/>
        <Route path='/admincomplaintspage' element={<AdminComplaintsPage/>}/>
      </Routes>
    </>
  )
}

export default App
