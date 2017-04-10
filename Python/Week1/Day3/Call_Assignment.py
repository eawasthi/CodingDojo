class Call(object):
	def __init__(self,unique_id,caller_name,caller_phone_number,time_of_call,reason_for_call):
		self.unique_id=unique_id
		self.caller_name=caller_name
		self.caller_phone_number=caller_phone_number
		self.time_of_call=time_of_call
		self.reason_for_call=reason_for_call


	def display_all(self):
		print "ID is", self.unique_id
		print "name is",self.caller_name
		print "pnumber is",self.caller_phone_number
		print "time is is",self.time_of_call
		print "Reason is",self.reason_for_call

c1=Call(1,"test",123123,1030,"reason")
c1.display_all()

class Callcenter(call):
	def __init__(self,queuesize,call,call_list):
		self.queuesize=queuesize
		self.call=call
		self.call_list=call_list

	def add(self,x):
		call_list=call_list,x

	def remove(self):
		call_list=call_list-call_list[0]

	def info():
		print caller_name
		print caller_phone_number
		print queuesize












