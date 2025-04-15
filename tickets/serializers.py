# tickets/serializers.py

from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id', 'user', 'subject', 'description', 'status', 'priority', 'resolution', 'created_at']
