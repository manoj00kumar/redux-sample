import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';
import './../bootstrap.css';
import Login from './login.js';

 class Main extends React.Component {
  render() {
  	return(
    <section id="main">
      <div class="container">
      <div class="row">
      <div class="col-md-7">About us</div>
      <div class="col-md-5">
        <div class="bg-info">
        <Login />
      </div></div>
      </div>
   </div>
    </section>

   
 

  		);
  	
    
   
}
}

export default Main;
