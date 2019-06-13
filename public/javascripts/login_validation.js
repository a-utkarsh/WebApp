$(document).ready(function(){

	$("#login").submit(function(e){
		e.preventDefault();
		var email= document.getElementById("email").value;
		var password = document.getElementById("password").value;

		console.log(`mail = ${email}, password = ${password}`);

		if (!email || !password) {
			$('#error-msg').html ('error ! email or password not specifed !');
			return;
		}

		 $.ajax({
			type: "POST",
			url: '/login/submit',
			data: {
				email:email,
				password:password
			},
			success: (data, status) => {
				console.log ('data = ', data, 'status = ', status);
				if (status=="success"){
					window.location.href = "http://127.0.0.1:8081/login_success";
				}	
			},
			error:function(xhr){
				//	alert(xhr.responseText);
				if (xhr.status==409){
					alert("Incorrect Username or Password");
				}
			}
		});
	});
});
