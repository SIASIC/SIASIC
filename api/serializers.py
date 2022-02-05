from rest_framework.serializers import ModelSerializer
from .models import JenisCuti

class JenisCutiSerializer(ModelSerializer):
    class Meta:
        model = JenisCuti
        fields = '__all__'

