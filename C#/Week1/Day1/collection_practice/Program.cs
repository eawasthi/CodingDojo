using System;
using System.Collections.Generic;

namespace collection_practice
{
    class Program
    {
        static void Main(string[] args)
        {
            // int[] numArray = new int[10] {1,2,3,4,5,6,7,8,9,10};
            // //  int[] numArray = {1,2,3,4,5,6,7,8,9,10}; // This is another way of defining array.
            // string[] stringArray = new string[4] {"Tim", "Martin", "Nikki", "Sara"};
            // bool[] boolArray = new bool[10] {true,false,true,false,true,false,true,false,true,false};
            // int[,] multiply = new int[10,10];
            List<string> flavors = new List<string>();
                flavors.Add("Strawberry");
                flavors.Add("Vanilla");
                flavors.Add("Rasberry");
                flavors.Add("Blueberry");
                flavors.Add("Mango");
                for(int i =0; i<flavors.Count; i++){
                    System.Console.WriteLine("Icecream Flavors " + flavors[i]);
                }
                System.Console.WriteLine();

                System.Console.WriteLine("Printing third flavor before Remove " + flavors[3]);
                System.Console.WriteLine();

                flavors.Remove("Blueberry");

                for(int i =0; i<flavors.Count; i++){
                    System.Console.WriteLine("Icecream Flavors after Remove " + flavors[i]);
                }

                Dictionary<string,string> profile = new Dictionary<string,string>();
                profile.Add("Name", "Ekta");
                profile.Add("Age", "Kevin");
                profile.Add("Place", "Vipul");
                profile.Add("Sex", "");


           

            // for (int i=0; i<numArray.Length; i++){
            //       System.Console.Write("[");
            //     for (int k=0; k<numArray.Length; k++){

            //          multiply[i,k]=numArray[i]*numArray[k];
                     
            //          System.Console.Write( multiply[i, k] + ", ");
            //     }       
            //     System.Console.Write("]");
            //      System.Console.WriteLine();  
            // }  


            Random rand = new Random();
            for(int i = 1; i < 5; i++){
                profile[$"Name{i}"] = flavors[rand.Next(0, flavors.Count)];
            }

            System.Console.WriteLine(profile);
            
            // Random randflavor = new Random();
            //         foreach (var entry in profile){
            //         profile[entry.Key] = flavors[randflavor.Next(0, flavors.Count)];
            // }
            // System.Console.WriteLine();
   
        }
    }
}
