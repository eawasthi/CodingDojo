from django.conf.urls import url
from . import views         

urlpatterns = [
	url(r'^$', views.index),
	url(r'^secrets$', views.secrets),
	url(r'^create$', views.create),
	url(r'^display$', views.display),
	url(r'^delete/(?P<id>\d+)$', views.delete),
]