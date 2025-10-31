import { Link, Outlet, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import "./Navber.css"

function Navber() {

  return (
    <div>
    <div className="header">
        <div>
            <Link className="Link" to="/"><h2>LoGo</h2></Link>
        </div>
        <div>
            <ul>
                <li><Link className="Link" to="/">Home</Link></li>
                <li><Link className="Link" to="/in/user/about">About</Link> </li>
                <li><Link className="Link" to="/in/user/login">Login</Link> </li>
                <li><Link className="Link" to="/college">College</Link></li> 
                <li><Link className="Link" to="/user">User</Link></li>
            </ul>
        </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Navber;