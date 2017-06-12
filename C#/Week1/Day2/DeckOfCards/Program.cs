using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck myDeck = new Deck();
            // Card DealtCard = myDeck.Deal();
            // Card DealtCard2 = myDeck.Deal();
            // System.Console.WriteLine(myDeck);
            // myDeck.Reset();
            // System.Console.WriteLine(myDeck);
            myDeck.Shuffle();
            System.Console.WriteLine(myDeck);
            Player PlayerOne = new Player();
            Player PlayerTwo = new Player();
            PlayerOne.Draw(myDeck);
            PlayerTwo.Draw(myDeck);
            PlayerOne.Draw(myDeck);
            PlayerOne.Draw(myDeck);
            PlayerTwo.Draw(myDeck);
            System.Console.WriteLine(myDeck);
            PlayerOne.Discard(2);
            System.Console.WriteLine(PlayerOne);
        }
    }
}
