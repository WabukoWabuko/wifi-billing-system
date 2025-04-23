from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

# URLs for the User API. This will handle CRUD operations! – Me
router = DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
