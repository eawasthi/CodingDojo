from django.shortcuts import render, HttpResponse
import datetime
def index(request):
	now = datetime.datetime.now()
	context = {
 	"time":now
 	}
	return render(request,'index.html',context)