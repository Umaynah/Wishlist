$(document).ready(function(){
	$("#add").click(function(){
		$("#list").append("<li>"+$("#textfield").val()+"</li>");
	});
});
