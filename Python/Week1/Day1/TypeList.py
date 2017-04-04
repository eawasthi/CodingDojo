my_list=[1,2,3,4,'Hello','ekta']
sum1=0
str1=""
intflag=False
strflag=False
for i in my_list:
	if type(i)==int:
		intflag=True
		sum1 = sum1 + i

	if type(i)==str:
		strflag = True
		str1 = str1+i

if intflag == True and strflag == True:
	print "its a mixed list"
elif intflag == True and strflag == False:
	print "its an integer list"
elif intflag == False and strflag == True:
	print "its a string list"

print str1 
print sum1



