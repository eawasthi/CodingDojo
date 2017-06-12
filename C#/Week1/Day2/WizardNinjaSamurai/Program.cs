using System;

namespace WizardNinjaSamurai
{
    class Program
    {
       public static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            // Wizard Ekta = new Wizard("Ekta");
            // Wizard Vipul = new Wizard("Vipul");
            // System.Console.WriteLine(Ekta);
            // Ekta.heal();
            // Ekta.fireball(Vipul);
            Ninja Ekta = new Ninja("Ekta");
            System.Console.WriteLine(Ekta);
            Ekta.steal(Ekta);
            Ekta.steal(Ekta);


        }
    }
}
