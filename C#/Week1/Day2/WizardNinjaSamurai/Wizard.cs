using System;
namespace WizardNinjaSamurai
{
    public class Wizard : Human{
        public Wizard(string n) : base(n){
            health = 50; 
            intelligence = 25; 
        }
    public void heal(){
        health += 10 * intelligence;
         }
    public void fireball(object target){
        Human enemy = target as Human;
        Random rand = new Random();
        int random = rand.Next(20, 51);
        enemy.health -= random;
        System.Console.WriteLine("This is coming from fireball");
    }
   }
}
