import React from 'react';

const Login =props=>{
    console.log(props.show)
    const [displayPopup, setDiplayPopup] = React.useState(props.show);
    console.log(displayPopup)
    // const setDiplayPopupHandler = ()=>{
    //     setDiplayPopup(false);
    // }
    
    return (
        <React.Fragment>
            <div id="id01" className="w3-modal" style={{display: displayPopup?"block":"none"}}>
                <div className="w3-modal-content w3-card-4">
                <header className="w3-container w3-teal"> 
                    <span  className="w3-button w3-display-topright">×</span>
                    <h2>Modal Header</h2>
                </header>
                <div className="w3-container">
                    <p>Some text..</p>
                    <p>Some text..</p>
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