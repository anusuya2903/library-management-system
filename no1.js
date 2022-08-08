//validation code for inputs

var uname = document.forms['form']['uname'];
var upass = document.forms['form']['upass'];

var uname_error = document.getElementById('uname_error');
var pass_error = document.getElementById('pass_error');

uname.addeventListener('textInput',uname_verify);
upass.addeventListener('textInput',uname_verify); 

function validated  () {
	if(uname.value.length < 7){
		uname.style.border = "1px solid red";
		uname_error.style.display = "block"; 
		uname.focus();
		return false;
	}
	if(upass.value.length < 3){
		upass.style.border = "1px solid red";
		pass_error.style.display = "block"; 
		upass.focus();
		return false;
	}	
}

function uname_verify(){
	if(uname.value.length >= 8){
		uname.style.border = "1px solid silver";
		uname_error.style.display = "none"; 
		return true;
	}
	if(upass.value.length >= 3){
		upass.style.border = "1px solid silver";
		pass_error.style.display = "none"; 
		return true;
	}  
}

