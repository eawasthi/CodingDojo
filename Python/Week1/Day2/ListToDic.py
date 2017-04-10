def Listto():
	name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
	favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas",]
	

	lname=len(name)
	lfavorite_animal=len(favorite_animal)
	if lname>=lfavorite_animal:
		new_list=zip(name, favorite_animal)
		newlist1=dict(new_list)
		print newlist1
	else:
		new_list=zip(favorite_animal,name)
		newlist1=dict(new_list)
		print newlist1

Listto()