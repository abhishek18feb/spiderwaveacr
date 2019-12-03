import React from 'react';
import './Loader.css';
const Loader = props =>{
    return (
        <div className="mydiv">
            <img src={window.location.origin + '/loader.gif'} className="ajax-loader"/>
        </div>
    )
}

export default Loader;

