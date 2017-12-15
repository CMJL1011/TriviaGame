function accSub(){
//These variables hold the values associated with each question
	var Q1 = document.avTriv.Q1.value;
	var Q2 = document.avTriv.Q2.value;
	var Q3 = document.avTriv.Q3.value;
	var corrAns = 0;

//These if statements assign the correct answers and increase the player's score if the answer is correct
	if (Q1 == "Boeing 747") {
		corrAns++;
}
	if (Q2 == "1903") {
		corrAns++;
}	
	if (Q3 == "Apollo 11") {
		corrAns++;
	}
//These arrays hold the confirm messages and associated images
	var img = ["assets/images/air-boss.jpg", "assets/images/solo-ready.jpg", "assets/images/grounded.jpg"];
	var msg = ["Air Boss!", "Almost ready to solo", "Back to ground school"];
	var totScore;

//These if statements reference positions in each array so the correct message is matched with the correct image and score
	if (corrAns == 0) {
		totScore = 2;
	}

	if (corrAns > 0 && corrAns < 3) {
		totScore = 1;
	}

	if (corrAns == 3) {
		totScore = 0;
	}

	
	//These statements address the unhiding of the feedback box and the associated HTML content
  document.getElementById("show").style.visibility = "visible";
	document.getElementById("msg").innerHTML = msg[totScore];
	document.getElementById("ans").innerHTML = "You answered " + corrAns + " questions correctly.";
	document.getElementById("img").src = img[totScore];	

}	

//Timer integration was unsuccessful --
