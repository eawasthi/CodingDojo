from django.shortcuts import render, redirect

def home(request):
   context = RequestContext(request,
                           {'user': request.user})
   return render_to_response('thirdauth/home.html',
                             context_instance=context)