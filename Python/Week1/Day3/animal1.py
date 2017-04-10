import animal
class Dog(Animal):
	def __init__(self):
		super(Dog, self).__init__()
		self.health=150

		def pet(self):
			self.health+=5

animal1=Dog("jackey",100)
animal1.walk().walk().walk().run().run().displayHealth()