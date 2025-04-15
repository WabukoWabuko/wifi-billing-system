# plans/serializers.py

from rest_framework import serializers
from .models import Plan

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['id', 'name', 'price', 'speed', 'duration', 'plan_type', 'is_active']
