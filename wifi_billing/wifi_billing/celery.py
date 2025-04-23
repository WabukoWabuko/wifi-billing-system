import os
from celery import Celery

# Setting up Celery for our WiFi system. Async tasks are gonna make this smooth! – Me
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wifi_billing.settings')

app = Celery('wifi_billing')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
