import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';
import './../bootstrap.css';
import { Button } from 'react-bootstrap';

 class Header extends React.Component {
  render() {
  	return(
  	
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav nav-tabs">
  <li className="active"><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a></li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul>
  </div>
</nav>


  		);
  	
    
   
}
}

export default Header;
