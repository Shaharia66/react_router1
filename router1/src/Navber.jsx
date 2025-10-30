import { Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import "./Navber.css"

function Navber() {

  return (
    <>
    <div className="header">
        <div>
            <Link className="Link" to="/"><h2>LoGo</h2></Link>
        </div>
        <div>
            <ul>
                <li><Link className="Link" to="/">Home</Link></li>
                <li><Link className="Link" to="/about">About</Link> </li>
                <li><Link className="Link" to="/login">Login</Link> </li>
                <li><Link className="Link" to="/college">College</Link></li> 

            </ul>

        </div>
    </div>
    </>
  )
}

export default Navber;