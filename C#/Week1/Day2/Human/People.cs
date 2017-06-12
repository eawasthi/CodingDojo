namespace Human {
    public class Humans {
       public string name;
       public int strength = 3;
       public int intelligence = 3;
       public int dexterity = 3;
       public int health = 100;


       public Humans(string Name = "")
       {
           name = Name;
       }
       public Humans(string Name, int Strength, int Intelligence,int Dexterity,int Health)
       {
           name = Name;
           strength = Strength;
           intelligence = Intelligence;
           dexterity = Dexterity;
           health = Health;
       }
        public void Attack(object target){
        Humans killer = target as Humans;
        if (killer != null)
        {
            killer.health -= strength * 5;
        }
      }
    }
}