# scripts/populate_db.py

from django.contrib.auth import get_user_model
from plans.models import Plan
from transactions.models import Transaction
from usage.models import Usage
from tickets.models import Ticket
from notifications.models import Notification
from django.utils import timezone

User = get_user_model()

def populate_db():
    # Create users with email=None to avoid requiring email
    user1 = User.objects.create_user(
        username='user1',
        password='pass123',
        email=None,  # Add email=None since email is optional
        full_name='John Doe',
        phone='254716542892',
        user_type='PPPoE',
        status='Active'
    )
    user2 = User.objects.create_user(
        username='user2',
        password='pass123',
        email=None,
        full_name='Jane Smith',
        phone='254710657794',
        user_type='Hotspot',
        status='Active'
    )

    # Create plans
    plan1 = Plan.objects.create(name='3mbps plan', price=1000.00, speed='3mbps', duration='30 days')
    plan2 = Plan.objects.create(name='30mins', price=50.00, speed='5mbps', duration='30 minutes')

    # Create transactions
    Transaction.objects.create(user=user1, amount=1000.00, transaction_id='TXN001', payment_method='M-Pesa', created_at=timezone.now())
    Transaction.objects.create(user=user2, amount=50.00, transaction_id='TXN002', payment_method='PayPal', created_at=timezone.now())

    # Create usage records
    Usage.objects.create(user=user1, data_used=500.00, data_limit=1000.00, session_start=timezone.now())
    Usage.objects.create(user=user2, data_used=20.00, data_limit=50.00, session_start=timezone.now())

    # Create tickets
    Ticket.objects.create(user=user1, subject='Connection Issue', description='Cannot connect to the internet', status='Open', created_at=timezone.now())
    Ticket.objects.create(user=user2, subject='Billing Query', description='Charged twice this month', status='Open', created_at=timezone.now())

    # Create notifications
    Notification.objects.create(user=user1, message='Payment received for 3mbps plan', type='SMS', created_at=timezone.now())
    Notification.objects.create(user=user2, message='Your 30mins plan is active', type='Email', created_at=timezone.now())

if __name__ == '__main__':
    populate_db()
