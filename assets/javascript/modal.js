//disables clicking outside of modal to remove it:
//this must remain outside of document.ready 
$('#ageModal').modal({
    backdrop: 'static',
    keyboard: false
});

$(document).ready(function(){
	// $("#ageModal").modal('show');
	$("#ageSubmitButton").on("click", function(){
		var userDate = $("#ageInput").val();
		console.log("userDate" + userDate);				
		var randomFormat = "YYYY/MM/DD";
	    var convertedDate = moment(userDate, randomFormat);
	    console.log("conv" + convertedDate);
    console.log(moment(convertedDate).toNow());
    console.log(moment(convertedDate).diff(moment(), "years"));
	    

	});








});//closes document.ready function
