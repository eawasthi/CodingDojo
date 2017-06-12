namespace WizardNinjaSamurai
{
    public class Samurai : Human{
       public Samurai(string n) : base(n){
           health = 200; 
       }
       public void deathBlow(object target){
         Human enemy = target as Human;
         if (enemy.health < 50){
            enemy.health = 0;
         }
       }
       public void meditate(){
           health = 200;
       }
    }
}