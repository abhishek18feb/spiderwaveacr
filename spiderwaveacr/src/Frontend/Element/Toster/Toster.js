import React from 'react';
import {connect} from 'react-redux';
import './Toster.css';

const Toster = props =>{
    let tosterDiv='';
    if(props.tosterSuccess){
        tosterDiv = `<div className="alert success">
                            <span className="closebtn">&times;</span>  
                            <strong>Success!</strong> ${props.tosterMessage}
                        </div>`
    }
    if(props.tosterError){
        tosterDiv = `<div className="alert">
                            <span className="closebtn">&times;</span>  
                            <strong>Danger!</strong> ${props.tosterMessage}
                        </div>`
    }
    return (
        <React.Fragment>
            {tosterDiv}
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
export default connect(mapStateToProps, null) (Toster);