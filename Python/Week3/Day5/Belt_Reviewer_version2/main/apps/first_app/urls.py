from django.conf.urls import url
from . import views         

urlpatterns = [
	url(r'^$', views.index),
	url(r'^books$', views.check),
	url(r'^displayBooks$', views.displayBooks),
	url(r'^logout$', views.logout),
	url(r'^books/add$', views.addBook),
	url(r'^clearData/', views.clearData),
	url(r'^addBookstoDB$', views.addBookstoDB),
	url(r'^goToEachBook$', views.goToEachBook),
	#url(r'^books/(?P<id>\d+)$', views.goToEachBook),
	url(r'^delete/(?P<id>\d+)$', views.delete),
	url(r'^iUser/(?P<id>\d+)$', views.iUser),

]






	# url(r'^display$', views.display),
	# url(r'^logout$', views.logout),
	# url(r'^books/add$', views.add),
	# #url(r'^books/all', views.addbook),
	# url(r'^cleardata/', views.cleardata),