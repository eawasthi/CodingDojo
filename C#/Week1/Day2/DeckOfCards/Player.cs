using System.Collections.Generic;
namespace DeckOfCards {
    public class Player{
        List<Card> Hand {get; set;}
    public Player(){
        Hand = new List<Card>();  
     }
    public Card Draw(Deck Deck){
        Card DrawnCard = Deck.Deal();
        Hand.Add(DrawnCard);
        return DrawnCard;
    }

    public Card Discard(int index){
        if(index>Hand.Count){
            System.Console.WriteLine("That's more cards than you have!");
            return null;
        }
        index--;
        Card DiscardedCard = Hand[index];
        Hand.RemoveAt(index);
        return DiscardedCard;
    }


   }  
}