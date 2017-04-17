def stars():
    symbol=""
    x=[2,4,"Ekta"]
    for i in x:
        if type(i)==int:
            for j in range(0,i):
                symbol=symbol + "*"
            print symbol
            symbol=""
        if type(i)==str:
            length=len(i)
            first=i[0]
            lower1=first.lower()
            for k in range(0,length):
                symbol=symbol+lower1
            print symbol
            symbol=""
stars()

#to go in x start for loop
#check element is int or string
#if int then loop for that elemet and print those many stars

