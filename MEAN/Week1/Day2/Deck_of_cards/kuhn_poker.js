//create a card which is going to have a suit, values.
//Three cards King, Queen, and Jack.
//Be able to shuffle the deck.
//Deal cards.



//Players
//Players place bets, call or fold.
//Pot


class Card {
	constructor(suit, value){
		this.suit=suit
		this.value=value

	var values = {
		13 : "King",
		11 : "Jack",
		12 : "Queen"
	}
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"]

	this.name = `${ values[this.value]} of ${suits[this.suit]}`
	console.log(this.name);
	}

}

var deck = []

function Deck(){
	this.reset = function(){
		deck = []

		for (var suit=0; suit < 1; suit++){
			for(var value=11; value <= 13; value++){
				deck.push(new Card(suit, value))
			}
		}
	}

	
	this.reset()


	this.deal = function(){
		return deck.pop()
	}

	this.shuffle = function(){
		for(var i=0; i<deck.length; i++){
			var j = Math.floor(Math.random()*deck.length)
			var temp = deck[j]
			deck[j] = deck[i]
			deck[i] = temp
		}
	}

	this.length = function(){
		return deck.length
	}
}

class Player{
	constructor(name, money){
		this.name=name
		this.money=money
	var player = {
		player1 : "player1",
		player2 : "player2"
	}
	var money = {
		player1 : 100,
		player2 : 100
		}
	}
}
var p = new Player("Adam", 100)
console.log(p.money);
console.log('\u2660');



