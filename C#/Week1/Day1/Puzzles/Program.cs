using System;
using System.Linq;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
           
          
            System.Console.WriteLine(TossMultipleCoins(5));
            
            int[] myArr = RandomArray();
            // System.Console.WriteLine(myArr.Min());
            // System.Console.WriteLine(myArr.Max());
        }

        static int[] RandomArray(){
            Random random = new Random();
            int[] intArr = new int[10];
            for (int idx = 0; idx<10; idx++){
                intArr[idx] = random.Next(5,26);
            }
            return intArr;
                
        }
        static string TossCoin(Random rand)
        {
            string result= "Heads";

            System.Console.WriteLine("Tossing a coin!");
            int output = rand.Next(0,2);
            if (output==1)
            {
                result="Tails";
            }
            return result;
        }

            static Double TossMultipleCoins(int num){
            int numHeads = 0;
            Random rand = new Random();
            for (int idx = 0; idx<num; idx++){
                if (TossCoin(rand) == "Heads"){
                    numHeads++;
                }
            }
            return  (Double)numHeads/num;
        }

// Create another function called TossMultipleCoins(int num) that returns a Double

// Have the function call the tossCoin function multiple times based on num value Have the function return a Double that reflects the ratio of head toss to total toss
    }
}
