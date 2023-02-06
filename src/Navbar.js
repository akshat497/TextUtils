import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

export default function Navbar(props) {
    // const [props.Dark, setprops.Dark] = useState("props.Dark")
    // function enable(){
    //     if (props.Dark==='props.Dark') {
    //         setprops.Dark('light')
    //        document.getElementById('bdy').style.backgroundColor="white"
    //        document.getElementById('bdy').style.color="black"
        
            
    //     }else{
    //         setprops.Dark('props.Dark')
    //         document.getElementById('bdy').style.backgroundColor="black"
    //         document.getElementById('bdy').style.color="white"
        
    //     }
    // }

  return (    <div>
    
    <nav className="navbar  navbar-expand-lg bg-body-tertiary ">
  <div className={`container-fluid navbar bg-${props.Dark} my-0 mx-0 `} data-bs-theme={`${props.Dark}`}>
    <Link className="navbar-brand" to="/Home">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="./About">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Gallery</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tools
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">TextUtils</a></li>
            <li><a className="dropdown-item" href="/">History</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">More</a></li>
          </ul>
        </li>
        
      </ul>
      <div className="form-check form-switch">
  {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={enable} checked/> */}
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.enable} />
  <label className={`form-check-label form-switch text-${props.Dark==='light'?'Dark':'light'}`} htmlFor="flexSwitchCheckChecked" >{props.Dark==='light'?'Dark':'light'}</label>
</div>
     
    </div>
  </div>
</nav>
    </div>
  )
}
