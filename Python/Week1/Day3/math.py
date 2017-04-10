class MathDojo(object):
	def __init__(self,inte, *args):
		self.inte=inte

	def add(self,x, *args):
		self.inte=self.inte+x
		for i in args:
			self.inte=self.inte+i
		return self

	def subtract(self,y,*args):
		self.inte=self.inte-y
		for j in args:
			self.inte=self.inte-j
		return self

	def result(self):
		print self.inte
		return self


md=MathDojo(10)
md.add(1,2,3).add(2,5).subtract(3,2).result()


md1=MathDojo(10)
md1.add(1,*[3,4]).add(3,*[2,4,3,1.25]).subtract(2, *[2,3]).result()