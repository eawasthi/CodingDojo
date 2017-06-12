using System;

namespace fundamentals_1
{
    class Program
    {
        static void Main(string[] args)
        {
            // for (int i = 1; i <= 255; i++){
            //     Console.WriteLine(i);
            // }

            // for (int i = 0; i<= 100; i++){
            //     if (i%3==0 && i%5==0){ //do nothing                      
            //     }
            //     else if(i%3 == 0 || i%5 == 0) {
            //         Console.WriteLine(i);
            //     }
            // }
            // int three = 3;
            // int five = 5;
            // for (int i = 1; i<= 100; i++){
            //     three--;
            //     five--;
            //     if (three == 0 && five==0){ 
            //         Console.WriteLine("fizzbuzz");  
            //         three = 3;
            //         five = 5;                
            //     }
            //     else if(three == 0) {
            //         Console.WriteLine("Buzz");
            //         three = 3;
            //     }
            //     else if(five == 0){
            //         Console.WriteLine("fizz");
            //         five = 5;
            //     }
            // }
            Random r = new Random();
            for (int i = 0; i < 10; i++) {
                int num = r.Next();
                 if (num%3==0 && num%5==0){
                    Console.WriteLine("FizzBuzz");
                }
                else if(num%3 == 0) {
                    Console.WriteLine("Buzz");
                } else if (num%5 == 0) {
                    Console.WriteLine("Fizz");
                }
            }



        }
    }
}
