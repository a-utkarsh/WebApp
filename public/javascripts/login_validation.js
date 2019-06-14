$(document).ready(function(){

	$("#login").submit(function(e){
		e.preventDefault();

		var email		= document.getElementById("email").value;
		var password 	= document.getElementById("password").value;

		$.ajax({
			type: "POST",
			url: '/login/submit',
			data: {
				email:email,
				password:password
			},
			success: (data, status) => {
				if (status=="success"){
					window.location.href = "http://127.0.0.1:8081/login_success";
				}
			},
			error:function(xhr){
				if (xhr.status==409){
					alert("Incorrect Username or Password");
				}
			}
		});
	});
});
