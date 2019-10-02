const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard(cardId) {
	if (cardsInPlay.length === 2) { 
		if (cardsInPlay[0] === cardsInPlay[1]) { 
			alert("You found a match!");
		} else {
			alert("Sorry, it doesn't match");
		}
	} 
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(2);