from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PackageViewSet, UserPackageViewSet

# URLs for Packages and UserPackages APIs. Let’s make subscribing easy! – Me
router = DefaultRouter()
router.register(r'packages', PackageViewSet)
router.register(r'user-packages', UserPackageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
