import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import '../App.css'


const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


  return (
    <div className='logindiv'>


      {!isAuthenticated && <button className='lginbtn' onClick={() => loginWithRedirect()}> Log In </button>}

      {isAuthenticated && <button style={{ backgroundColor: "red" }} onClick={() => logout({ returnTo: window.location.origin })}> Log Out </button>}
      {isAuthenticated && <Link to={'/dashboard'}> <button> DashBoard</button></Link>}
      {isAuthenticated && <Link to={'/charthome'}> <button> Charts Home</button></Link>}

    </div>)
}


export default Login