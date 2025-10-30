import { Link,NavLink, Outlet } from "react-router";
// import "./Navber.css"
function College() {

  return (
    <div style={{textAlign:"center"}} className="college">
      <h1> this is college .</h1>
      <div>
        <NavLink className="Link" to="student">Student</NavLink>
        <NavLink className="Link" to="department">Department</NavLink>
        <NavLink className="Link" to="details">Details</NavLink>

        <Outlet/>
      </div>
    </div>
  )
}

export default College;