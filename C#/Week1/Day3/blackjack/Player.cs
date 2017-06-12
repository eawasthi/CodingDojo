using System.Collections.Generic;

namespace deck_of_cards1{
    public class Player{
        public List<Card> Hand {get; set;}
        
        public Player(){
            Hand = new List<Card>();
        }
        public Card Draw(Deck Deck){
            Card DrawnCard = Deck.Deal();
            Hand.Add(DrawnCard);
            return DrawnCard;
        }
        public Card Discard(int index){
            if(index > Hand.Count){
                System.Console.WriteLine("This is more than the cards that you have.");
                return null;
            }
            index--;
            Card DiscardCard = Hand[index];
            Hand.RemoveAt(index);
            return DiscardCard;
        }
    }
}