var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards [0];
cardsInPlay.push(cardOne);
cardsInPlay;
console.log("User flipped queen");
var cardTwo = cards [2];
cardsInPlay.push(cardTwo);
cardsInPlay;
console.log("User flipped king");


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) ? (alert("You found a match!") : alert("Sorry, try again");)
}

/*
//this works, but without two else statements?
if (cardsInPlay.length === 2) {

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again")}
}
// else ... stuff?? 
*/ 