def odd_even():
	for i in range(1,2001):
		if i%2!=0:
			print "Number is ", int(i), "This is an odd number."
		else: 	#if i%2==0#
			print "Number is ", int(i), "This is an even number."
odd_even()




def multiply(arr,num):
	for i in range(len(arr)):
		arr[i]=arr[i]*num
	return arr

a = [1,2,3]

print multiply(a,5)


def multiple_ones(arr):
	result=[]
	for x in arr:
		temp=[]
		for y in range(0,x):
			temp.append(1)
		result.append(temp)
	print result

x = multiple_ones(multiply([2,4,5],3))
print x



