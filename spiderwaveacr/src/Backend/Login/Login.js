import React from 'react';
import './Login.css'

class Login extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <div className="center">
        <form className="modal-content animate">
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
            
          <button type="submit">Login</button>
          <label>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </label>
        </div>

        <div className="container" style={{ backgroundColor:'#f1f1f1' }}>
          
        </div>
      </form>
      </div>
      
    )
  }
}

export default Login; 



  