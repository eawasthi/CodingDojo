def stars(arr):
	temp=""
	for i in arr:
		if type(i)==int:
			for x in range(0,i):
				temp=temp+"*"
			print temp
			temp=""
		if type(i)==str:
            length=len(i)#3
			first=i[0]
			first_lower=first.lower()
			for i in range(0,length):
				temp=temp+first_lower
			print temp 
			temp=""
			
stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
