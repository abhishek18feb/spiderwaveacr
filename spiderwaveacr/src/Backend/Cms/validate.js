import axios from 'axios';

export const Validation = async (name, value, rules, token)=>{
	let isValid = true;
	let validationMsg = '';
    if (!rules) {
        return true;
    }
	if(rules.required){
		isValid=value.trim()!='' && isValid
		validationMsg = [name]+' is required field'
	}
	
	if(rules.unique){
		let response = await axios({
			method:'post',
			url: "http://localhost:3300/cms/check_unique",
			data:{[name]:value},
			headers: {'Authorization': 'Berear '+token}
		})
		isValid = !response.data.result && isValid
		validationMsg = [name]+' should be unique'
	}
	return {isValid, validationMsg, name};
}