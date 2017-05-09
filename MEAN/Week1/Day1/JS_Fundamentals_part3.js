function ninjaConstructor(name, cohort){
	var ninja = {}
	var belts = ["yellow", "red", "black"]
	ninja.name= name;
	ninja.cohort = cohort;
	ninja.beltLevel=0;
	ninja.levelUp = function(){
		if(ninja.beltLevel<2){
			ninja.beltLevel += 1;
			ninja.belt= belts[ninja.beltLevel];
		}
		return ninja
	}
	ninja.belt = belts[ninja.beltLevel];
	return ninja;
}