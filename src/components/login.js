import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';
import './../bootstrap.css';


 class Login extends React.Component {

  constructor(props){
    super(props);
        this.state={
          username:'',
          pwd:''
        }
        this.setData=this.setData.bind(this);
  }
 setData=(e)=>{
      this.setState({[e.target.name]:e.target.value});
   }

   handleForm=(e)=>{
    e.preventDefault();
  let user=this.state.username;
  let pwd=this.state.pwd;
  if(user==""){
    alert("username required");
   }
   if(pwd==""){
    alert("password required");
   }
  }
  render() {
  	return(
      <form class="form">
        <div class="form-group">
<label for="">Username</label> 
<input type="text" name="username" class="form-control" value={this.state.username} onChange={this.setData} />
        </div>
        <div class="form-group">
<label for="">Password</label> 
<input type="text" name="pwd" class="form-control" value={this.state.pwd} onChange={this.setData} />
        </div>
        <button class="btn btn-primary" type="submit" onclick={this.handleForm}>Login</button>
      </form>
   
 

  		);
  	
    
   
}
}

export default Login;
