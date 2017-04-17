from django.shortcuts import render, HttpResponse,redirect
import random 
import time
def index(request):
	request.session['total']=0 
	request.session['activities'] = "Let's make some money \n"
	return render(request,'first_app/index.html')


def process_money(request):
	if request.method == 'POST':
		localtime = time.asctime( time.localtime(time.time()) )
		if request.POST['building']=="farm":
			rvalue=random.randint(10,20)
			request.session['total']+=rvalue
			request.session['activities']+="Earned " + str(rvalue) + " golds from the Farm"
			request.session['activities'] += str(localtime) + "\n"
			context = {
			'random':rvalue,
			}
			print rvalue
			return render(request,'first_app/index.html',context)
		elif request.POST['building']=="cave":
			rvalue1=random.randint(5,10)
			request.session['total']+=rvalue1
			request.session['activities']+="Earned " + str(rvalue1) + " golds from the Cave"
			request.session['activities'] += str(localtime) + "\n"
			context1 = {
			'random1':rvalue1,
			}
			print rvalue1
			return render(request,'first_app/index.html',context1)
		elif request.POST['building']=="house":
			rvalue2=random.randint(2,5)
			request.session['total']+=rvalue2
			request.session['activities']+="Earned " + str(rvalue2) + " golds from the House"
			request.session['activities'] += str(localtime) + "\n"
			context2 = {
			'random2':rvalue2,
			}
			print rvalue2
			return render(request,'first_app/index.html',context2)
		elif request.POST['building']=="casino":
			rvalue3=random.randint(-50,50)
			request.session['total']+=rvalue3
			request.session['activities']+="Earned " + str(rvalue3) + " golds from the Casino"
			request.session['activities'] += str(localtime) + "\n"
			context3 = {
			'random3':rvalue3,
			}
			print rvalue3
			return render(request,'first_app/index.html',context3)
	else:
		return redirect('/')
