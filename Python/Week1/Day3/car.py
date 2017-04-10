class Car(object):
	def __init__(self, price,speed,fuel,mileage):
		self.price=price
		self.speed=speed
		self.fuel=fuel
		self.mileage=mileage
	
	def tax(self):
		if self.price >10000:
			self.tax =.15
		else:
			self.tax=.12
		print "Tax is",self.tax
		return self.tax

	def display_all(self):
		print "Price: ",self.price 
		print "Speed: ",self.speed
		print "Fuel: ",self.fuel
		print "Mileage: ",self.mileage
		return self

toyota1 = Car(11000,30,"full",15)
toyota2 = Car(2000,30,"empty",15)
toyota3 = Car(7000,30,"full",15)
toyota4 = Car(8000,30,"empty",15)
toyota5 = Car(9000,30,"full",15)
toyota6 = Car(12000,30,"low",15)

toyota1.price()
toyota1.tax()

toyota2.display_all()
toyota2.tax()

toyota3.display_all()
toyota3.tax()

toyota4.display_all()
toyota4.tax()

toyota5.display_all()
toyota5.tax()

toyota6.display_all()
toyota6.tax()




