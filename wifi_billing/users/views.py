from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

# Views for the User API. I’m making sure admins can manage users easily! – Me
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        # If the user is an admin, they can see all users; otherwise, only themselves
        if self.request.user.role == 'admin':
            return User.objects.all()
        return User.objects.filter(id=self.request.user.id)
