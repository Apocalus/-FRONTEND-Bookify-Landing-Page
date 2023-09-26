//email verification 
function validateEmail() {
  	var re = /\S+@\S+\.\S+/; 
	var email = document.getElementById("email_address").value;
  	if (re.test(email) == true){
		alert("Thank You for Subscribing");
	}
	else{
		alert("Invalid email address. Please try again");
	}
}

