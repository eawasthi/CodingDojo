using System.Collections.Generic;
using System.Data;
using MySql.Data.MySqlClient;
using System;
 
namespace DbConnection
{
    public class DbConnector
    {
        static string server = "localhost";
        static string db = "ConsoleDB"; //Change to your schema name
        static string port = "3306"; //Potentially 8889
        static string user = "root";
        static string pass = "root";
        internal static IDbConnection Connection {
            get {
                return new MySqlConnection($"Server={server};Port={port};Database={db};UserID={user};Password={pass};SslMode=None");
            }
        }
        
        //This method runs a query and stores the response in a list of dictionary records
        public static List<Dictionary<string, object>> Query(string queryString)
        {
            using(IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                   command.CommandText = queryString;
                   dbConnection.Open();
                   var result = new List<Dictionary<string, object>>();
                   using(IDataReader rdr = command.ExecuteReader())
                   {
                      while(rdr.Read())
                      {
                          var dict = new Dictionary<string, object>();
                          for( int i = 0; i < rdr.FieldCount; i++ ) {
                              dict.Add(rdr.GetName(i), rdr.GetValue(i));
                          }
                          result.Add(dict);
                      }
                      return result;
                                      }
                }
            }
        }
        //This method run a query and returns no values
        public static void Execute(string queryString)
        {
            using (IDbConnection dbConnection = Connection)
            {
                using(IDbCommand command = dbConnection.CreateCommand())
                {
                    command.CommandText = queryString;
                    dbConnection.Open();
                    command.ExecuteNonQuery();
                }
            }
        }
        public static void read(){
            List<Dictionary<string, object>> select = DbConnector.Query("SELECT * FROM Users");
            foreach(var user in select){
                System.Console.WriteLine($"Id {user["id"]}, First Name: {user["FirstName"]}, Last Name: {user["LastName"]}, Favorite Number: {user["FavoriteNumber"]}");
            }
        }


        public static void create(){
            System.Console.WriteLine("What is your First Name?");
            string Firstname = Console.ReadLine();
            System.Console.WriteLine("What is your Last Name?");
            string Lastname = Console.ReadLine();
            System.Console.WriteLine("What is your Favorite Number?");
            string favnum = Console.ReadLine();

            var test = DbConnector.Query($"INSERT INTO Users(FirstName, LastName, FavoriteNumber) VALUES ('{Firstname}', '{Lastname}', {favnum})");
        }
    }
}