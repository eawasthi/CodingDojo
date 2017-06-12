using System;
using System.Collections.Generic;

namespace deck_of_cards1
{
    public class Deck{

        public List<Card> cards{get; set;}

        public Deck(){
            cards = new List<Card>();
            BuildDeck();
        }
        public void BuildDeck(){
            string[] Suits = {"Hearts","Club","Diamonds","Spades"};
            string[] Values = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen","King"};
            for(int suit = 0; suit < Suits.Length; suit++){
                for(int val = 0; val < Values.Length; val++){
                    if(Values[val] == "Ace"){
                    cards.Add(new Card(Values[val],Suits[suit],11));
                    }
                    else if(Values[val] == "10" || Values[val] == "Jack" || Values[val] == "Queen" || Values[val] == "King"){
                    cards.Add(new Card(Values[val],Suits[suit],10));
                    }
                    else{
                    cards.Add(new Card(Values[val],Suits[suit],val+1));
                    }
                    // System.Console.WriteLine($"Card: {Values[val]} of {Suits[suit]}");
                }
            }
        }
        public Card Deal(){
         Card returnCard = cards[0];
         cards.RemoveAt(0); 
         return returnCard;  
        }
        public void Reset(){
            cards = new List<Card>();
            BuildDeck();
        }
        public void Shuffle(){
            Random rand = new Random();
            for(int idx = 0; idx < cards.Count; idx++){
                int randIdx = rand.Next(idx, cards.Count);
                Card temp = cards[randIdx];
                cards[randIdx] = cards[idx];
                cards[idx] = temp;


            } 
        }
    }
}