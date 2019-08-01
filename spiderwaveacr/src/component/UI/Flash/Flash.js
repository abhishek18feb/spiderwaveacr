import React, { useEffect, useState } from 'react';
import Bus from '../../../shared/Bus';

import './Flash.css';

export const Flash = (props) => {
  
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('');
    let [type, setType] = useState('');

    useEffect(() => {
        Bus.addListener('flash', ({message, type}) => {
            setVisibility(true);
            setMessage(message);
            setType(type);
            setTimeout(() => {
                setVisibility(false);
            }, 4000);
        });
                

    }, []);

    useEffect(() => {
        if(document.querySelector('.close') !== null) {
            document.
            querySelector('.close').
            addEventListener('click', () => setVisibility(false));
        }
        //console.log('flash messge') 
    })
    
    return (
         visibility && <div className={`Alert Alert-${type}`}>
                <span className="close"><strong>X</strong></span>
                <p>{message}</p>
            </div>
    )
}

export default Flash;