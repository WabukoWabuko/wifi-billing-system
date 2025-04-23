from rest_framework import serializers
from .models import UsageLog

# Serializer for Usage Logs. I want users to track their data usage! – Me
class UsageLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsageLog
        fields = ['id', 'user', 'upload', 'download', 'created_at']
