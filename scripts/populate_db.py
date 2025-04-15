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
    # Create users
    user1 = User.objects.create_user(
        username='user1',
        password='pass123',
        email='john.doe@example.com',
        full_name='John Doe',
        phone='254716542892',
        address='123 Nairobi St, Kenya',
        user_type='PPPoE',
        status='Active'
    )
    user2 = User.objects.create_user(
        username='user2',
        password='pass123',
        email='jane.smith@example.com',
        full_name='Jane Smith',
        phone='254710657794',
        address='456 Mombasa Rd, Kenya',
        user_type='Hotspot',
        status='Active'
    )

    # Create plans
    plan1 = Plan.objects.create(
        name='3mbps plan',
        price=1000.00,
        speed='3mbps',
        duration='30 days',
        plan_type='PPPoE',
        is_active=True
    )
    plan2 = Plan.objects.create(
        name='30mins',
        price=50.00,
        speed='5mbps',
        duration='30 minutes',
        plan_type='Hotspot',
        is_active=True
    )

    # Assign plans to users
    user1.active_plan = plan1
    user2.active_plan = plan2
    user1.save()
    user2.save()

    # Create transactions
    Transaction.objects.create(
        user=user1,
        plan=plan1,
        amount=1000.00,
        transaction_id='TXN001',
        payment_method='M-Pesa',
        status='Completed',
        created_at=timezone.now()
    )
    Transaction.objects.create(
        user=user2,
        plan=plan2,
        amount=50.00,
        transaction_id='TXN002',
        payment_method='PayPal',
        status='Completed',
        created_at=timezone.now()
    )

    # Create usage records
    Usage.objects.create(
        user=user1,
        data_used=500.00,
        data_limit=1000.00,
        session_start=timezone.now(),
        status='Active'
    )
    Usage.objects.create(
        user=user2,
        data_used=20.00,
        data_limit=50.00,
        session_start=timezone.now(),
        status='Active'
    )

    # Create tickets
    Ticket.objects.create(
        user=user1,
        subject='Connection Issue',
        description='Cannot connect to the internet',
        status='Open',
        priority='High',
        created_at=timezone.now()
    )
    Ticket.objects.create(
        user=user2,
        subject='Billing Query',
        description='Charged twice this month',
        status='Open',
        priority='Medium',
        created_at=timezone.now()
    )

    # Create notifications
    Notification.objects.create(
        user=user1,
        message='Payment received for 3mbps plan',
        type='SMS',
        status='Sent',
        created_at=timezone.now()
    )
    Notification.objects.create(
        user=user2,
        message='Your 30mins plan is active',
        type='Email',
        status='Sent',
        created_at=timezone.now()
    )

if __name__ == '__main__':
    populate_db()
