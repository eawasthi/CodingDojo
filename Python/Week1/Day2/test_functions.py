def multiply(arr,num):
	for i in range(len(arr)):
		arr[i]=arr[i]*num
	return arr

def multiple_ones(arr):
	result=[]
	for x in arr:
		temp=[]
		for y in range(0,x):
			temp.append(1)
		result.append(temp)