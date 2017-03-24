var allTheFeelings = [
	"happy", 
	"sad", 
	"angry", 
	"funny", 
	"scared", 
	"nervous", 
	"excited", 
	"calm", 
	"sleepy"];

function makeButtons() {
	for (var i = 0; i < allTheFeelings.length; i++) {
		$("#buttons").append("<input class='button' id='feeling[i]' type='submit' value='" + allTheFeelings[i] + " '>");	
	} // end of loop through allTheFeelings array
} // end of makeButtons function

$("#createButton").on("click", function(event) {
	event.preventDefault();

	var userFeeling = $("#addAFeeling").val().trim();
	allTheFeelings.push(userFeeling);
	$("#buttons").empty();
	makeButtons();
	$("#addAFeeling").val("");	
}); //end of createButton click function
	
makeButtons();

$(document).on("click", ".button", function(){

	$("#gifs").empty();
	var feeling = $(this).val();
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        feeling + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
    	url: queryURL,
    	method: "GET"
    }).done(function(gifs) {
console.log(gifs);

		for (var i = 0; i < gifs.data.length; i++) {
			var gifDiv = $("<div class='gif'>");
			var rating = gifs.data[i].rating;
			var ratingText = $("<p>").html("Rated: " + rating);
			// var gif = gifs.data[i].images.fixed_height_still.url;
			var gifImg = $("<img>").attr("src", gifs.data[i].images.fixed_height_still.url);
			gifImg.attr("data-still", gifs.data[i].images.fixed_height_still.url);
			gifImg.attr("data-animate", gifs.data[i].images.fixed_height.url);
			gifImg.attr("data-state", "still");
			gifImg.addClass("gifImg");

			gifDiv.append(ratingText);
			gifDiv.append(gifImg);

			$("#gifs").prepend(gifDiv);

		} // end of for loop to go through gif array of 10
    }) //end of ajax call

}) //end of click on feeling button function
$(document).on("click", ".gifImg", function(){
	var state = $(this).attr("data-state");
console.log(state);

	if(state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	};

	if(state === "animate") {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state","still");
	};
}) //end of click on gif function to pause or play








