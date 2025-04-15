# transactions/models.py

from django.db import models
from users.models import User

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plan = models.ForeignKey('plans.Plan', on_delete=models.SET_NULL, null=True, related_name='transactions')  # Add reference to plan
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_id = models.CharField(max_length=50, unique=True)
    payment_method = models.CharField(max_length=50)
    status = models.CharField(max_length=10, choices=[('Pending', 'Pending'), ('Completed', 'Completed'), ('Failed', 'Failed')], default='Pending')  # Add status
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=['transaction_id'], name='idx_transaction_id'),
            models.Index(fields=['user'], name='idx_transaction_user'),
        ]

    def __str__(self):
        return f"Transaction {self.transaction_id} for {self.user.username}"
