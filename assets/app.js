var allTheFeelings = ["happy", "sad", "angry", "joy", "funny", "scared", "nervous", "excited", "calm", "sleepy"];

function makeButtons() {
	for (var i = 0; i < allTheFeelings.length; i++) {
		$("#buttons").append("<input class='button' id='feeling[i]' type='submit' value='" + allTheFeelings[i] + " '>");

	} // end of loop through allTheFeelings array
} // end of makeButtons function

makeButtons();