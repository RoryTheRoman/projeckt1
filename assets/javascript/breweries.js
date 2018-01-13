var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/?key=214453339d6bbb99f8869c9524f3a6c1";

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	console.log(response);
});



