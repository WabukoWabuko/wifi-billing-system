from rest_framework import viewsets
from .models import UsageLog
from .serializers import UsageLogSerializer

# Views for Usage Logs. This will show how much data users are consuming! – Me
class UsageLogViewSet(viewsets.ModelViewSet):
    queryset = UsageLog.objects.all()
    serializer_class = UsageLogSerializer

    def get_queryset(self):
        return UsageLog.objects.filter(user=self.request.user)
