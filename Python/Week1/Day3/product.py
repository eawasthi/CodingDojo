class Product(object):
	def __init__(self, price, item_Name, weight, brand, cost):
		self.price=price
		self.item_Name=item_Name
		self.weight=weight
		self.brand=brand
		self.cost=cost
		self.status="for sale"

	def sell(self):
		self.status="sold"
		return self

	def tax(self,tax):
		self.price=self.price+(tax*self.price)
		return self

	def rr(self,reason):
		if reason=="Defective":
			self.status="Defective Item"
			self.price=0
		if reason=="boxed":
			self.status="Like New For sale"
		if reason=="box open":
			self.status="Used Item"
			self.price=self.price-(.20*self.price)
		return self

	def displayInfo(self):
		print "Price is ", self.price
		print "Name is ", self.item_Name
		print "Weight is ", self.weight
		print "Brand is ", self.brand
		print "Cost is ", self.cost
		print "Status is ", self.status


product1=Product(1000,"test",150, "harley",2000)
product1.rr("box open").displayInfo()