from django.shortcuts import render, HttpResponse

def index(request):
    print "*"*50
    return render(request,'first_app/index.html')

# def index(request):
# 	return render(request, 'vinmymvc/index.html')
# def show(request):
# 	print request.method
# 	return return render(request, 'vinmymvc/showusers.html')