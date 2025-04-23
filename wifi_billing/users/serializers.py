from rest_framework import serializers
from .models import User

# Serializers for the User model. This will help with API responses! – Me
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'phone', 'role', 'mac_address', 'status', 'created_at']

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'phone', 'password', 'role', 'mac_address']
