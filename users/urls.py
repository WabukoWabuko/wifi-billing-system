# users/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter

# We'll define the views later, so leave the router empty for now
router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
]
