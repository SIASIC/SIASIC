from rest_framework.serializers import ModelSerializer, SlugRelatedField, CharField
from .models import JenisCuti, UserLevel
from django.contrib.auth.models import User

class RoleSlugRelatedField(SlugRelatedField):
    def display_value(self, instance):
        return 'role: %s' % (int(instance))
class JenisCutiSerializer(ModelSerializer):
    class Meta:
        model = JenisCuti
        fields = '__all__'

class UserLevelSerializer(ModelSerializer):
    level = CharField(source='get_level_display')
    class Meta:
        model = UserLevel
        fields = '__all__'

class UserSerializer(ModelSerializer):
    role = RoleSlugRelatedField(
        many=False,
        read_only=True,
        slug_field='level'
    )
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']
    