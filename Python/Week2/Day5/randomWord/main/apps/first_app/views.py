from django.shortcuts import render, HttpResponse
import random
import string
def index(request):
	return render(request,'first_app/index.html')

def attempt(request):
	if 'count' not in request.session:
		request.session['count']=0
	else:
		request.session['count']=request.session['count']+1
		rvalue =''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(14)])
		context = {
	 	"random":rvalue
	 	}
	return render(request,'first_app/index.html',context)