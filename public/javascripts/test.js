function checkForm(form){
	var returnvar=true;
	if (message.length>0){
		alert("Email already exists")
		return returnvar=false;
	}
	return returnvar;
}
