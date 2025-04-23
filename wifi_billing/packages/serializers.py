from rest_framework import serializers
from .models import Package, UserPackage

# Serializers for Packages and UserPackages. I want users to see their subscriptions! – Me
class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = ['id', 'name', 'speed', 'price', 'duration']

class UserPackageSerializer(serializers.ModelSerializer):
    package = PackageSerializer(read_only=True)

    class Meta:
        model = UserPackage
        fields = ['id', 'user', 'package', 'start_date', 'expiry_date', 'data_limit', 'data_used']
