import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes,Route,Link, Navigate } from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navber from './Navber'
import './Navber.css'
import NotFound from './NotFound'
import College from './College'
import Student from './student'
import Details from './details'
import Department from './department'

function App() {

  return (
    <>
      {/* <h2>From here we start react router.</h2>
      <Link to="/">Home page</Link>
      <br />
      <Link to="/about" >About page</Link>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes> */}
      <Navber/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/college" element={<College/>}>

        <Route path="student" element={<Student/>} />
        <Route path="department" element={<Department/>} />
        <Route path="details" element={<Details/>} />
        </Route>
        <Route path="/*" element={<Navigate to="/about"/>} />
        {/* <Route path="/*" element={<NotFound/>} /> */}
    </Routes>
    </>
  )
}

export default App
