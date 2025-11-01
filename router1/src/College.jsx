import { Link,NavLink, Outlet } from "react-router";
// import "./Navber.css"
function College() {

  return (
    <div style={{textAlign:"center"}} className="college">
      <h1> this is college information..</h1>
      <h2><Link to="/">go back to home</Link></h2>
      <div>
        <NavLink className="link" to="">Student</NavLink>
        <NavLink className="link" to="department">Department</NavLink>
        <NavLink className="link" to="details">Details</NavLink>

        <Outlet/>
      </div>
    </div>
  )
}

export default College;