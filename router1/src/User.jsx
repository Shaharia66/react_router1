import { Link } from "react-router";

function User() {
    const userData=[
        {name:"saif", id:1},
        {name:"taif", id:2},
        {name:"paif", id:3},
        {name:"daif", id:4},
        {name:"raif", id:5},
        {name:"kaif", id:6},
    ]

  return (
    <div style={{marginLeft:"10px"}}>
      <h1>here we find some user information.</h1>
      {
        userData.map((item)=>(
            <h3><Link to={"/user/"+item.id}>{item.name}</Link></h3>
        ))
      }
    </div>
  )
}
export default User;