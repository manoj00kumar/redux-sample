import React from 'react';

import './bootstrap.css';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from './components/main.js';
import {connect} from 'react-redux';
function App(props) {
  console.log(props);
  return (
    <div>
    
    <Header />
    <Main />
    <button onClick={()=>{props.changeName("Shiv")}}>{props.myname}</button>
    <Footer />
    </div>
  );
}
const mapStatetoProps=(state)=>{
return{
  myname:state.name
}
}
const mapdispatchToProps=(dispatch)=>{
  return {
    changeName:(name)=>{dispatch({type:'UpdateIt',payload:name})}
  }
}
export default connect(mapStatetoProps,mapdispatchToProps)(App);
