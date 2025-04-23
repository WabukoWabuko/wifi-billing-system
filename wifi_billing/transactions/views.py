from rest_framework import viewsets
from .models import Transaction
from .serializers import TransactionSerializer

# Views for Transactions. Users can see their payment history! – Me
class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)
