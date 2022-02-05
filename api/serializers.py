from rest_framework.serializers import ModelSerializer
from .models import JenisCuti, UserLevel
class JenisCutiSerializer(ModelSerializer):
    class Meta:
        model = JenisCuti
        fields = '__all__'

class UserLevelSerializer(ModelSerializer):    
    class Meta:
        model = UserLevel
        fields = '__all__'