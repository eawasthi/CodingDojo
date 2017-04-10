import random
def headsortails():
	heads=0
	tails=0
	value=""
	print "Starting the program..."
	for x in range(1,5001):
		i = random.randint(0,1)
		if i==0:
			heads=heads+1
			value="HEADS"
		else:
			tails=tails+1
			value="TAILS"
		print "Attempt #", x ,"Throwing a coin... It's a", value , "! ... Got ", heads, "head(s) so far and ", tails ," tail(s) so far"
headsortails()


