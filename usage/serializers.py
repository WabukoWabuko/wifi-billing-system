# usage/serializers.py

from rest_framework import serializers
from .models import Usage

class UsageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usage
        fields = ['id', 'user', 'data_used', 'data_limit', 'session_start', 'session_end', 'status']
