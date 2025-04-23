from rest_framework import serializers
from .models import Notification

# Serializer for Notifications. Users will get updates like login alerts! – Me
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'created_at']
