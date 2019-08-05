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
        return ()=>{
                        setVisibility(false)
                        setMessage(false)
                        setType(false)
                    }  

    }, []);

    useEffect(() => {
        if(document.querySelector('.Close') !== null) {
            document.
            querySelector('.Close').
            addEventListener('click', () => setVisibility(false));
        }
        //console.log('flash messge') 
    })
    
    return (
         visibility && <div className={`Alert Alert-${type}`}>
                <span className="Close"><strong>X</strong></span>
                <p>{message}</p>
            </div>
    )
}

export default Flash;