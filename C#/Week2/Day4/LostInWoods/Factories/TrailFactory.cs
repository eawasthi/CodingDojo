using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using LostInWoods.Models;
 
namespace LostInWoods.Factory
{
    public class TrailFactory : IFactory<Trail>
    {
        private string connectionString;
        public TrailFactory()
        {
            connectionString = "server=localhost;userid=root;password=root;port=3306;database=woods_db;SslMode=None";
        }
        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }

        public void Add(Trail trail)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO Trails (trail_name, trail_length, description, elavation_change, latitude, longitude, id) VALUES (@trail_name, @trail_length, @description, @elavation_change, @latitude, @longitude, @id)";
                dbConnection.Open();
                dbConnection.Execute(query, trail);
            }
        }
            public IEnumerable<Trail> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Trail>("SELECT * FROM Trails");
            }
        }
        public IEnumerable<Trail> TrailID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Trail>($"SELECT * FROM Trails where id = {id}");
            }
        }
    }
}