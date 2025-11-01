import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router'
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
import User from './User'
import UserDetail from './userDetail'

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

      {/* <Navber/> */}

      <Routes>
        <Route element={<Navber />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/List?" element={<User/>} />
          <Route path='/user/:id/:name?' element={<UserDetail/>} />
          <Route path="in">
            <Route path="/in/user">
            <Route path="/in/user/about" element={<About />} />
            <Route path="/in/user/login" element={<Login />} />
          </Route>
          </Route>
        </Route>

        <Route path="/college" element={<College />}>

          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/*" element={<Navigate to="/about" />} />
        {/* <Route path="/*" element={<NotFound/>} /> */}
      </Routes>
    </>
  )
}

export default App;
