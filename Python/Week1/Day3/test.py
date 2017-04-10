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

toyota1 = Car(11000,30,"gwkdhjgj",15)
print toyota1.fuel
