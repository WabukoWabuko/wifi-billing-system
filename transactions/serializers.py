# transactions/serializers.py

from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'user', 'plan', 'amount', 'transaction_id', 'payment_method', 'status', 'created_at']
