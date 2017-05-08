from django.conf.urls import url
from . import views         

urlpatterns = [
	url(r'^$', views.index),
	url(r'^login$', views.login),
	url(r'^register$', views.register),
	url(r'^travels$', views.travels),
	url(r'^travels/add$', views.add),
	url(r'^addplan$', views.addplan),
	url(r'^destination/(?P<id>\d+)$', views.destination),
	url(r'^joiningtable/(?P<id>\d+)$', views.joiningtable),
	url(r'^logout$', views.logout),
]