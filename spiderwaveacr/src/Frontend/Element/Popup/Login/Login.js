import React from 'react';

const Login =props=>{
    
    const {show, displayPopup} = props;
    
    return (
        <React.Fragment> 
            <div id="id01" className="w3-modal" style={{display: show}}>
                <div className="w3-modal-content w3-card-4">
                <header className="w3-container w3-teal"> 
                    <span  className="w3-button w3-display-topright" 
                        onClick={()=>displayPopup(false)}
                    >×</span>
                    <h2>Modal Header</h2>
                </header>
                <div className="w3-container">
                    <div className="form-popup" id="myForm">
                        <form action="/action_page.php" class="form-container">
                            <h1>Login</h1>

                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <button type="submit" class="btn">Login</button>
                            
                        </form>
                    </div>
                </div>
                <footer className="w3-container w3-teal">
                    <p>Modal Footer</p>
                </footer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Login);