
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





x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
y=x[:5]
#x.append(y)
x.insert(0, y)
print x









