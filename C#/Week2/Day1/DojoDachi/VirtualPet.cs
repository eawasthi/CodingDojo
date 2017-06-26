namespace DojoDachi
{
    public class virtualPet
    {
    public int happiness { get; set; }
    public int fullness { get; set; }
    public int energy { get; set; }
    public int meals { get; set; }

    public virtualPet()
    {
        happiness = 20; 
        fullness = 20; 
        energy = 20;
        meals = 3;
    }
    
   }
}