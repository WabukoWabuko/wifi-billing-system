from rest_framework import serializers
from .models import Transaction

# Serializer for Transactions. I’m focusing on M-Pesa payments for Kenya! – Me
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'user', 'amount', 'payment_method', 'transaction_id', 'created_at']
