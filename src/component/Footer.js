import React from 'react'
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
// import"../images"
function Footer() {
  return (
    <footer style={{backgroundColor: "rgba(35, 45, 57, 0.95)", padding: "30px 0", marginTop: "50px"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <p style={{color: "white", margin: 0, fontSize: "15px"}}>Copyright &copy; 2024 NutriTrack - Designed by Dawood Waseem</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
