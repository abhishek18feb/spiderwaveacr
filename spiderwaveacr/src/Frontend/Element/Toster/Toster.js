import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './Toster.css';

const Toster = props =>{
    const [display, setDisplayProperty] = useState('none')
    useEffect(() => {
        if(props.tosterSuccess||props.tosterError){
            setDisplayProperty('block')
        }else{
            setDisplayProperty('none')
        }
    }, [props.tosterSuccess, props.tosterError]);
   
    
    return (
        <React.Fragment>
            <div className="w3-top" style={{'display':display}}>
				<div className="w3-bar w3-white w3-wide w3-padding w3-card">
                    {
                        props.tosterSuccess?(<div className="alert success">
                                                <span className="closebtn" onClick={event=>setDisplayProperty('none')}>&times;</span>  
                                                <strong>Success!</strong> {props.tosterMessage}
                                            </div>):''
                    }
                    {
                        props.tosterError?(<div className="alert">
                                                <span className="closebtn" onClick={event=>setDisplayProperty('none')}>&times;</span>  
                                                <strong>Danger!</strong> ${props.tosterMessage}
                                            </div>):''
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state=>{
	return{
		tosterMessage: state.toster.message,
		tosterSuccess: state.toster.success,
		tosterError: state.toster.error
	}
}
export default React.memo(connect(mapStateToProps, null) (Toster));