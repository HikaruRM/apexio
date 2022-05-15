import {Link} from "react-router-dom";

function SignUp() {
  return (
    <>
      <h3>
        This is the main page
      </h3>
      <Link to={'/second'}>Go to second</Link>
    </>
  );
}

export default SignUp;
