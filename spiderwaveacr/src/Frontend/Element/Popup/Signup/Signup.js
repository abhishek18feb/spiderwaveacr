import React, {useState, useEffect} from 'react';

const Signup = ()=>{
    const [user, setUserReg] = useState({name:'', email:'', mobile:'', password:'', confirmPassword:''});
    return (
        <React.Fragment>
            <form action="/action_page.php" className="form-container">
                {/* <h3>Sign up</h3> */}
                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" value={user.name} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={user.email} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                <label htmlFor="email"><b>Mobile</b></label>
                <input type="text" placeholder="Enter Mobile" name="mobile" value={user.mobile} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                <label htmlFor="psw"><b>Confirm Password</b></label>
                <input type="password" placeholder="Enter Confirm Password" name="confirmPassword" value={user.confirmPassword} onChange={event=>setUserReg({...user, [event.target.name]:event.target.value})} required />
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </React.Fragment>
    )
}

export default Signup;