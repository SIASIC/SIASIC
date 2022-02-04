from rest_framework.serializers import ModelSerializer
from .models import JatahCuti

class JatahCutiSerializer(ModelSerializer):
    class Meta:
        model = JatahCuti
        fields = '__all__'

