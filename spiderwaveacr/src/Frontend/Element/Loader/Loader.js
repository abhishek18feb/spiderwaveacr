import React from 'react';
import './Loader.css';
const Loader = props =>{
    console.log(props.loader)
    let displayLoaderStyle=props.loader?'block':'none';
    return (
        <div className="mydiv" style={{'display':displayLoaderStyle}}>
            <img src={window.location.origin + '/loader.gif'} className="ajax-loader"/>
        </div>
    )
}

export default Loader;

