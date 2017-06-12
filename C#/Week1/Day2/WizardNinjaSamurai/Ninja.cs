namespace WizardNinjaSamurai
{
    public class Ninja : Human{
        public Ninja(string n) : base(n){
            dexterity = 175; 
        }
        public void steal(object target){
            Human enemy = target as Human;
            health+= 10; 
        }
        public void getAway(){
            health -=15;
        }
    }
}