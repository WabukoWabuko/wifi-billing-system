from rest_framework import viewsets
from .models import Package, UserPackage
from .serializers import PackageSerializer, UserPackageSerializer

# Views for Packages and UserPackages. This will let users subscribe to plans! – Me
class PackageViewSet(viewsets.ModelViewSet):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

class UserPackageViewSet(viewsets.ModelViewSet):
    queryset = UserPackage.objects.all()
    serializer_class = UserPackageSerializer

    def get_queryset(self):
        # Users can only see their own subscriptions
        return UserPackage.objects.filter(user=self.request.user)
