import random
def table():
    for i in range(1,11):
        i=random.randint(60,100)
            print i
                if i>=60 and i<=70:
                    print "Score:", i , "Your grade is D"
                if i>70 and i<=80:
                    print "Score:", i , "Your grade is C"
                if i>80 and i<=90:
                    print "Score:", i , "Your grade is B"
                if i>90 and i<=100:
                    print "Score:", i , "Your grade is A"
table()
