using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            Artist artistFromMtv = Artists.Where(name => name.Hometown == "Mount Vernon").Single();
            System.Console.WriteLine($"Artist {artistFromMtv.ArtistName} from Mount Vernon is {artistFromMtv.Age} years old.");
            //Who is the youngest artist in our collection of artists?
            Artist youngestArtist = Artists.OrderBy(age => age.Age).First();
            System.Console.WriteLine($"Youngest Artist is {youngestArtist.ArtistName} who age is {youngestArtist.Age}");
            //Display all artists with 'William' somewhere in their real name
            List<Artist> williamArtists = Artists.Where(name => name.RealName.Contains("William")).ToList();
            for (var i =0; i <williamArtists.Count; i++){
            System.Console.WriteLine($"All the Artists named {williamArtists[i].RealName}");
            }
            //Display the 3 oldest artist from Atlanta
            List<Artist> atlantaArtists = Artists.Where(location =>location.Hometown == "Atlanta")
            .OrderByDescending(age => age.Age)
            .Take(3)
            .ToList();
            for (var i = 0; i<atlantaArtists.Count; i++){
            System.Console.WriteLine($"Artist {atlantaArtists[i].RealName} from {atlantaArtists[i].Hometown} is {atlantaArtists[i].Age}");
            }
            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
            Group WuTang = Groups.Where(Groupname => Groupname.GroupName == "Wu-Tang Clan")
                
        }
    }
}
