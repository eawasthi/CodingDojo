x="It's thanksgiving day. It's my birthday,too!"
y=x.replace('day', 'month')
print len(x)
print y



x = [2,54,-2,7,12,98]
min1=x[0]
max1=x[0]
for i in x:
	if i > max1:
		max1=i
	if i<min1:
		min1=i
print max1, min1


x = ["hello",2,54,-2,7,12,98,"world"]
print x[0], x[len(x)-1], 




x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print x
y=x[:5]
z=x[5:]
print z

for i in range(1,1000):
	if i%2!= 0:
		print i


for i in range(5,1000000):
	i=i*5
	print i


a = [1, 2, 5, 10, 255, 3]
sum=0;
for i in a:
	sum=sum+i
print sum


a = [1, 2, 5, 10, 255, 3]
sum=0
avg=0
for i in a:
	sum=sum+i
	avg=sum/len(a)
print avg


my_list=[1,"vipul",2,4,"ekta"]
for i in my_list:
	if type(i)==int:
		print i
		if i>=100:
			print "Thats a big number"
		else:
			print "Thats a small number"
	if type(i)==str:
		print i
		if i>=50:
			print "Thats a long sentence"
		else:
			print "Short sentence"
		if len(my_list)>=10:
			print "Big list!"

