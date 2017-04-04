my_list=["hello", 1, 3, "whatsup", 99.9,1000]
for i in my_list:
	if type(i) ==int:
		if i>=100:
			print "Thats a big number"
	else:
		print "Thats a small number"
	if type(i) ==str:
		if len( i )>=50:
			print "Long sentence"
	else:
		print "short sentence"
	if len(my_list)>=3:
		print "Big list"
