$("#signup").submit(function(event){
	alert("hi")
	console.log("hi")
	event.preventDefault();
});

function checkForm(e){
	e.preventDefault();
	$.post("/",function(data,status){
		console.log(data,status)
		if (status=== "200"){
			alert("Post Success");
			window.location("http://127.0.0.1:8081/success");
		}
		else{
			alert("post error")
		}
	});
	return false;
}
