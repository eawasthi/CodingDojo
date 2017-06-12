using System;
using DbConnection;

namespace crud_with_mysql
{
    class Program
    {
        static void Main(string[] args)
        {  
            DbConnector.read();
            DbConnector.create();
            // var select = DbConnector.Query("SELECT * FROM Users");
            // foreach( var thing in select){
            //     // System.Console.WriteLine(thing["id"]);
            //     foreach( var key in thing){
            //         System.Console.WriteLine(key.Value);
            //     }
            // }               
        }
    }
}
