$(document).ready(function(){

	$("#signup").submit(function(e){
		e.preventDefault();

		var name		= document.getElementById("name").value;
		var email		= document.getElementById("email").value;
		var password 	= document.getElementById("password").value;
		var phone   	= document.getElementById("phone").value;
		var bday 		= document.getElementById("bday").value;
		var gender 		= document.getElementById("gender").value;

		$.ajax({
			type: "POST",
			url: '/signup/submit_signup',
			data: {
				name:name,
				email:email,
				password:password,
				phone:phone,
				bday:bday,
				gender:gender
			},
			success: (data, status) => {
				if (status=="success"){
					window.location.href = "http://127.0.0.1:8081/success";
				}	
			},
			error:function(xhr){
				if (xhr.status==409){
					alert(xhr.responseText);
				}
			}
		});
	});
});
