import React  from "react";
import PropTypes from 'prop-types'; 
// import {Link} from 'react-router-dom'

export default function MyNavBar1(props)
{


 
	return(
		<nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand"  href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active"  to="/about">About</Link> */}
          <a className="nav-link active"  href="/">About</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/">{props.aboutText}</Link> */}
          <a className="nav-link active"  href="/">Home</a>
        </li>
      </ul>

                  <div className={`form-check form-switch d-flex text-${props.mode === 'light'?'dark' : 'white'}`}>

                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode}/>
                  <label className={`form-check-label mx-2`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
                  </div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" >Search</button>
      </form>
    </div>
  </div>
</nav>
	)
}


// Restrictions
MyNavBar1.propTypes  = { 
	title  : PropTypes.string 
}

// inits
MyNavBar1.defaultProps = {
	title : 'Stranger Things' ,
  aboutText : 'Back to home'
  };
