namespace deck_of_cards1
{
    public class Card{
        public string stringVal{get; set;}
        public int val{get; set;}
        public string suit{get; set;}

        public Card(string StringVal, string Suit, int Val){
            stringVal = StringVal;
            val = Val;
            suit = Suit;
        }
    }
    
}