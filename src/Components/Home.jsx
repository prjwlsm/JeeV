import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout } = useAuth0();


  return (
    <div>
      <div>
        <button> DashBoard </button>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      </div>

    </div>
  )

}

export default Home