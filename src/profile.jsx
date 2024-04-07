import React from "react"
import "./profile1.css"

const Profile = () =>{
  return(
    <div className="div" style={{ margin: '20px' }}>
      <div className="portfolio" style={{ margin: '50px' }}>
        <div className="profile-pic">
          <img src="https://s.yimg.com/zb/imgv1/dc02c2bd-a5ac-3668-9fe7-9bda86e83b31/t_500x300" alt="Profile" />
        </div>
        <a href="profileCard.html" style={{ textDecoration: 'none' }}>
          <h1 className="parts">Narendra Modi</h1>
        </a>
        <p>Prime Minister Of India</p>
        <div className="social-links">
          <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/in/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/" target="_blank"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="portfolio" style={{ margin: '50px' }}>
        <div className="profile-pic">
          <img src="https://wikibiostars.in/wp-content/uploads/2022/07/Draupadi-Murmu-1024x768.jpg" alt="Profile" />
        </div>
        <a href="profileCard1.html" style={{ textDecoration: 'none' }}>
          <h1 className="parts">Draupadi Murmu</h1>
        </a>
        <p>President Of India</p>
        <div className="social-links">
          <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/in/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/" target="_blank"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}


export default Profile