import React from 'react';

const Signup = ()=>{
    return (
        <React.Fragment>
            <form action="/action_page.php" class="form-container">
                {/* <h3>Sign up</h3> */}
                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required />
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />
                <label for="email"><b>Mobile</b></label>
                <input type="text" placeholder="Enter Mobile" name="mobile" required />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <label for="psw"><b>Confirm Password</b></label>
                <input type="password" placeholder="Enter Confirm Password" name="psw" required />
                <button type="submit" class="btn">Sign Up</button>
            </form>
        </React.Fragment>
    )
}

export default Signup;