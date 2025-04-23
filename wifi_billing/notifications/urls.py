from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NotificationViewSet

# URLs for Notifications API. Let’s keep users in the loop! – Me
router = DefaultRouter()
router.register(r'', NotificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
