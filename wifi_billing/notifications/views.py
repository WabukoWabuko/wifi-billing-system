from rest_framework import viewsets
from .models import Notification
from .serializers import NotificationSerializer

# Views for Notifications. Keeping users informed is key! – Me
class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user)
