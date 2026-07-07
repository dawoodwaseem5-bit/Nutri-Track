import React from 'react'
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
// import"../images"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="header-area header-sticky" style={{backgroundColor: "rgba(35, 45, 57, 0.95)", position: "sticky", top: 0, zIndex: 999}}>
    <div className="container">
      <nav className="main-nav">
        <Link to="/Home" className="logo">Nutri<em>Track</em></Link>
        <ul className="nav">
          <li style={{color:"green"
          }}><Link to="/Home" className="active">Home</Link></li>
          <li ><Link to="/About">About</Link ></li>
          <li><Link to="/Bmi">BMI Calculator</Link></li>
          <li><Link to="/News">Health News</Link></li>
          <li><Link to="/Notes">Add Nutritions</Link></li>
          <li><Link to="/Diet">Diet Plan</Link></li>
          {!localStorage.getItem('token') ? (
            <li className="main-button"><Link to="/Signup">Sign Up</Link></li>
          ) : (
            <li className="main-button"><Link to="/Login" onClick={() => localStorage.removeItem('token')}>Logout</Link></li>
          )}
        </ul>
        <Link className="menu-trigger"><span>Menu</span></Link>
      </nav>
    </div>
  </header>
  )
}

export default Header
