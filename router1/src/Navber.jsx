import { NavLink, Outlet, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import "./Navber.css"

function Navber() {

  return (
    <div>
    <div className="header">
        <div>
            <NavLink className="NavLink" to="/"><h2>LoGo</h2></NavLink>
        </div>
        <div>
            <ul>
                <li><NavLink className="link" to="/">Home</NavLink></li>
                <li><NavLink className="link" to="/in/user/about">About</NavLink> </li>
                <li><NavLink className="link" to="/in/user/login">Login</NavLink> </li>
                <li><NavLink className="link" to="/college">College</NavLink></li> 
                <li><NavLink className="link" to="/user">User</NavLink></li>
                <li><NavLink className="link" to="/user/list">NavLink</NavLink></li>
            </ul>
        </div>
    </div>
    <Outlet />
    </div>
  )
}


export default Navber;