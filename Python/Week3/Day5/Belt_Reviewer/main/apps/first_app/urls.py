from django.conf.urls import url
from . import views         

urlpatterns = [
	url(r'^$', views.index),
	url(r'^books$', views.books),
	# url(r'^display$', views.display),
	# url(r'^logout$', views.logout),
	# url(r'^books/add$', views.add),
	# #url(r'^books/all', views.addbook),
	# url(r'^cleardata/', views.cleardata),
]