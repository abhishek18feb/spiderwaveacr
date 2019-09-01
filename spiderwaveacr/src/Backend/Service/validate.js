import axios from '../../axios';

export const Validation = async (name, value, rules, token, id)=>{
	let isValid = true;
	let validationMsg = '';
    if (!rules) {
        return true;
    }
	if(rules.required){
		isValid=value.trim()!='' && isValid
		validationMsg = (!isValid)?[name]+' is required field':''
	}
	
	if(rules.unique && value.length){
		let response = await axios({
			method:'post',
			url: "/service/check_unique",
			data:{[name]:value, _id:id},
			headers: {'Authorization': 'Berear '+token}
		})
		isValid = !response.data.result && isValid
		validationMsg = (!isValid)?[name]+' should be unique':''
	}
	return {isValid, validationMsg, name};
}