import { Link } from "react-router";

function NotFound() {

  return (
    <>
      <h1>Page Not Found </h1>
      <h4><Link to="/">return</Link></h4>
      <h2>404 ERROR!</h2>
    </>
  )
}

export default NotFound;