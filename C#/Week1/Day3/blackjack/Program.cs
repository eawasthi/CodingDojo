using System;

namespace deck_of_cards1
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Do you want to play BlackJack (y/n)");
            string Response = Console.ReadLine();
            if (Response == "y"){
                System.Console.WriteLine("How much do you want to bet?");
                int betResponse = Convert.ToInt32(Console.ReadLine());
                Deck myDeck = new Deck();
                myDeck.Shuffle();
                Player PlayerOne = new Player();
                Player Dealer = new Player();
                PlayerOne.Draw(myDeck);
                Dealer.Draw(myDeck);
                PlayerOne.Draw(myDeck);
                Dealer.Draw(myDeck);
                System.Console.WriteLine($"Here are your two cards: {PlayerOne.Hand[0].stringVal} of {PlayerOne.Hand[0].suit} and {PlayerOne.Hand[1].stringVal} of {PlayerOne.Hand[1].suit}");
                System.Console.WriteLine($"Here is the Dealer's two card: {Dealer.Hand[0].stringVal} of {Dealer.Hand[0].suit} and {Dealer.Hand[1].stringVal} of {Dealer.Hand[1].suit}");
                    if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 21 && Dealer.Hand[0].val + Dealer.Hand[1].val == 21){
                        System.Console.WriteLine("Bust!");
                    }
                    else if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 21 && Dealer.Hand[0].val + Dealer.Hand[1].val < 21){
                        System.Console.WriteLine($"You Won and received ${betResponse} dollars");
                    }
                    else if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21 && Dealer.Hand[0].val + Dealer.Hand[1].val == 21){
                        System.Console.WriteLine($"Dealer Won and received ${betResponse} dollars");
                    }
                    else{
                         System.Console.WriteLine("Do you want to draw another card? (y/n)");
                    }
                string cardResponse = Console.ReadLine();

                if (cardResponse == "n"){
                    if(Dealer.Hand[0].val + Dealer.Hand[1].val < 18 ){
                        Dealer.Draw(myDeck);
                        System.Console.WriteLine("The Deal Draws his Third Card");
                                if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val > 21 && Dealer.Hand[0].stringVal != "Ace" && Dealer.Hand[1].stringVal != "Ace" && Dealer.Hand[2].stringVal != "Ace" && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                                    System.Console.WriteLine("The Dealer Lost");
                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val >=18 && Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val < 21){
                                    System.Console.WriteLine("The Dealer Holds");
                                    if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                                        System.Console.WriteLine($"The Dealer Won and received ${betResponse} dollars");
                                    }
                                    else{
                                        System.Console.WriteLine($"You Won and received ${betResponse} dollars");
                                    }
                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val == 20 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 20){
                                System.Console.WriteLine("Bust!");
                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val == 21 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 21){
                                System.Console.WriteLine("Bust!");
                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val < 18 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                                    Dealer.Draw(myDeck);
                                    System.Console.WriteLine("The Dealer Draws his Fourth Card");                                
                                    if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val> 21 && Dealer.Hand[0].stringVal != "Ace" && Dealer.Hand[1].stringVal != "Ace" && PlayerOne.Hand[2].stringVal != "Ace" &&Dealer.Hand[3].stringVal != "Ace" && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                                        System.Console.WriteLine("The Dealer Lost");
                                    }
                                    else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                                        System.Console.WriteLine($"The Dealer Won and received ${betResponse} dollars");
                                    }
                                     else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val == 20 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 20){
                                    System.Console.WriteLine("Bust!");
                                    }
                                    else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val== 21 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 21){
                                    System.Console.WriteLine("Bust!");
                                    }
                                    else{
                                        System.Console.WriteLine($"You Won and received ${betResponse} dollars");
                                        
                                    }
                                    }
                    }
                    else if(Dealer.Hand[0].val + Dealer.Hand[1].val >= 18 && Dealer.Hand[0].val + Dealer.Hand[1].val < 21){
                        System.Console.WriteLine("The Dealer Holds");
                        if(Dealer.Hand[0].val + Dealer.Hand[1].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                            System.Console.WriteLine("The Dealer Wins!");
                        }
                    }
                    // else if(Dealer.Hand[0].val + Dealer.Hand[1].val < 18 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                    //     System.Console.WriteLine("The Dealer Holds");
                    //     if(Dealer.Hand[0].val + Dealer.Hand[1].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                    //         System.Console.WriteLine("The Dealer Wins!");
                    // }
                }

                if (cardResponse == "y"){
                    PlayerOne.Draw(myDeck);
                    System.Console.WriteLine($"Here are your three cards: {PlayerOne.Hand[0].stringVal} of {PlayerOne.Hand[0].suit} and {PlayerOne.Hand[1].stringVal} of {PlayerOne.Hand[1].suit} and {PlayerOne.Hand[2].stringVal} of {PlayerOne.Hand[2].suit}");   
                     if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val == 21 && Dealer.Hand[0].val + Dealer.Hand[1].val == 21){
                    System.Console.WriteLine("Bust!");
                    }
                    else if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val == 21 && Dealer.Hand[0].val + Dealer.Hand[1].val < 21){
                        System.Console.WriteLine($"You Won and received ${betResponse} dollars");
                    }
                    else if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val < 21 && Dealer.Hand[0].val + Dealer.Hand[1].val == 21){
                        System.Console.WriteLine($"Dealer Won and received ${betResponse} dollars");
                    }
                    else if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val > 21 && PlayerOne.Hand[0].stringVal != "Ace" && PlayerOne.Hand[1].stringVal != "Ace" && PlayerOne.Hand[2].stringVal != "Ace" && Dealer.Hand[0].val + Dealer.Hand[1].val < 21){
                        System.Console.WriteLine("You Lost!");
                    }
                    else if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val > 21 && PlayerOne.Hand[0].stringVal == "Ace" || PlayerOne.Hand[1].stringVal == "Ace" || PlayerOne.Hand[2].stringVal == "Ace"){
                        int sumPlayer = PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val - 10;
                        System.Console.WriteLine("You had an Ace. Your Ace now has a value of 1. Would you like to draw your fourth card?(y/n)");
                        string fourthaceresponse = Console.ReadLine();
                        if(fourthaceresponse == "y"){
                        PlayerOne.Draw(myDeck);
                        System.Console.WriteLine($"Here are your four cards: {PlayerOne.Hand[0].stringVal} of {PlayerOne.Hand[0].suit} and {PlayerOne.Hand[1].stringVal} of {PlayerOne.Hand[1].suit} and {PlayerOne.Hand[2].stringVal} of {PlayerOne.Hand[2].suit}and {PlayerOne.Hand[3].stringVal} of {PlayerOne.Hand[3].suit}");

                
                

                    if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val < 18 ){
                        System.Console.WriteLine("Do you want to draw your fourth card? (y/n)");
                        string fourthcardresponse = Console.ReadLine();

                        if (fourthcardresponse == "y"){

                        PlayerOne.Draw(myDeck);
                        System.Console.WriteLine("You have drawn your fourth card");
                                if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val + PlayerOne.Hand[3].val > 21 && PlayerOne.Hand[0].stringVal != "Ace" && PlayerOne.Hand[1].stringVal != "Ace" && PlayerOne.Hand[2].stringVal != "Ace" && PlayerOne.Hand[3].stringVal != "Ace" && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                                    System.Console.WriteLine("The PlayerOne Lost");
                                }
                                else if(PlayerOne.Hand[0].val + PlayerOne.Hand[1].val + PlayerOne.Hand[2].val + PlayerOne.Hand[3].val >=18 && Dealer.Hand[0].val + Dealer.Hand[1].val < 21){
                                    System.Console.WriteLine("Do you want to hold? (y/n)");
                                    string forthcardholdresponse = Console.ReadLine();

                                    if(forthcardholdresponse == "y"){
                                    if(Dealer.Hand[0].val + Dealer.Hand[1].val < 18 ){
                        Dealer.Draw(myDeck);
                        System.Console.WriteLine("The Deal Draws his Third Card");
                                if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val > 21 && Dealer.Hand[0].stringVal != "Ace" && Dealer.Hand[1].stringVal != "Ace" && Dealer.Hand[2].stringVal != "Ace" && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                                    System.Console.WriteLine("The Dealer Lost");
                                    System.Console.WriteLine($"You Won and received ${betResponse} dollars");

                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val >=18 && Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val < 21){
                                    System.Console.WriteLine("The Dealer Holds");
                                    if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                                        System.Console.WriteLine($"The Dealer Won and received ${betResponse} dollars");
                                    }
                                    
                                    else{
                                        System.Console.WriteLine($"You Won and received ${betResponse} dollars");
                                    }
                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val == 20 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 20){
                                System.Console.WriteLine("Bust!");
                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val == 21 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 21){
                                System.Console.WriteLine("Bust!");
                                }
                                else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val < 18 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                                    Dealer.Draw(myDeck);
                                    System.Console.WriteLine("The Dealer Draws his Fourth Card");                                
                                    if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val> 21 && Dealer.Hand[0].stringVal != "Ace" && Dealer.Hand[1].stringVal != "Ace" && PlayerOne.Hand[2].stringVal != "Ace" &&Dealer.Hand[3].stringVal != "Ace" && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                                        System.Console.WriteLine("The Dealer Lost");
                                    }
                                    else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                                        System.Console.WriteLine($"The Dealer Won and received ${betResponse} dollars");
                                    }
                                     else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val == 20 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 20){
                                    System.Console.WriteLine("Bust!");
                                    }
                                    else if(Dealer.Hand[0].val + Dealer.Hand[1].val + Dealer.Hand[2].val + Dealer.Hand[3].val== 21 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val == 21){
                                    System.Console.WriteLine("Bust!");
                                    }
                                    else{
                                        System.Console.WriteLine($"You Won and received ${betResponse} dollars");
                                        
                                    }
                                    }
                    }
                    else if(Dealer.Hand[0].val + Dealer.Hand[1].val >= 18 && Dealer.Hand[0].val + Dealer.Hand[1].val < 21){
                        System.Console.WriteLine("The Dealer Holds");
                        if(Dealer.Hand[0].val + Dealer.Hand[1].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                            System.Console.WriteLine("The Dealer Wins!");
                        }
                    }
                    // else if(Dealer.Hand[0].val + Dealer.Hand[1].val < 18 && PlayerOne.Hand[0].val + PlayerOne.Hand[1].val < 21){
                    //     System.Console.WriteLine("The Dealer Holds");
                    //     if(Dealer.Hand[0].val + Dealer.Hand[1].val > PlayerOne.Hand[0].val + PlayerOne.Hand[1].val){
                    //         System.Console.WriteLine("The Dealer Wins!");
                    // }
                }
                     }
                                    }


                                    
                    }
                }


                
                
                
                }

            }
            

            // Deck myDeck = new Deck();
            // Card DeltCard = myDeck.Deal();
            // Card DeltCard2 = myDeck.Deal();
            // System.Console.WriteLine(myDeck);
            // myDeck.Reset();
            // System.Console.WriteLine(myDeck);
            // myDeck.Shuffle();
            // System.Console.WriteLine(myDeck);
            // Player PlayerOne = new Player();
            // Player Dealer = new Player();
            // PlayerOne.Draw(myDeck);
            // Dealer.Draw(myDeck);
            // PlayerOne.Draw(myDeck);
            // Dealer.Draw(myDeck);
            // System.Console.WriteLine(myDeck.cards);
            // PlayerOne.Discard(2);
            // System.Console.WriteLine(PlayerOne.Hand);

        }
    }
}
}
