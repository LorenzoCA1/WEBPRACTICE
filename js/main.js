function clicked() {

	var user = document.getElementById('login-username');
	var pass = document.getElementById('login-password');
	
	var coruser = "admin";
	var corpass = "password";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			window.alert("You are logged in as " + user.value);
			//window.open("http://google.com");
			window.location.href="Dashboard.html";
		
		} else {
		
			window.alert("Incorrect username or password!");
		
		}
	
	} else {
	
			window.alert("Incorrect username or password!");
	
	}

}
