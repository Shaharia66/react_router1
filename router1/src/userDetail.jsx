import { Link, useParams } from "react-router";

function UserDetail(){
    const paramsData=useParams();
    console.log(paramsData.id)
    return(
        <div>
            <h1>here all user details..</h1>
            <h2>userid is:{paramsData.id}</h2>
            <h4><Link to="/user">back</Link></h4>
        </div>
    )
}
export default UserDetail;
