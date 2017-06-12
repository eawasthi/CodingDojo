using System;
using System.Collections.Generic;
namespace Boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> myList = new List<object>();
            myList.Add(7);
            myList.Add(28);
            myList.Add(-1);
            myList.Add(true);
            myList.Add("Chair");

            int sum = 0;
            foreach (object items in myList){
                System.Console.WriteLine(items);
                if(items is int){
                    sum+=(int)items;
                }
                System.Console.WriteLine(sum);

            }

        }

    }
}
  