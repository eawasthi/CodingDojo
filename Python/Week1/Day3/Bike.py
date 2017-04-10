class Bike(object):
	def __init__(self, price, max_speed):
		self.price=price
		self.max_speed=max_speed
		self.miles=0

	def displayinfo(self):
		print self.price
		print self.max_speed
		print self.miles
		return self

	def ride(self):
		print "Riding"
		self.miles+=10
		return self

	def reverse(self):
		print "Reversing"
		if self.miles>=5:
			self.miles-=5
		return self

bike1 = Bike(5000,20)
bike1.ride().ride().ride().reverse().displayinfo()

print "Second instance"

bike2 = Bike(7000,15)
bike2.ride().ride().reverse().reverse().displayinfo()

print "Third instance"
bike3=Bike(1000,80)
bike3.reverse().reverse().reverse().displayinfo()
