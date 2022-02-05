from rest_framework import permissions
from .models import UserLevel

class RoleAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        user_level = UserLevel.objects.get(user=request.user.id)
        if request.user.is_authenticated and user_level.level == "1":
            return True
    
    def has_object_permission(self, request, view, obj):

        if request.user.is_superuser:
            return False

        return True

class RoleAtasan(permissions.BasePermission):
    def has_permission(self, request, view):
        user_level = UserLevel.objects.get(user=request.user.id)
        if request.user.is_authenticated and user_level.level == "2":
            return True
    
    def has_object_permission(self, request, view, obj):

        if request.user.is_superuser:
            return False

        return True

class RolePejabat(permissions.BasePermission):
    def has_permission(self, request, view):
        user_level = UserLevel.objects.get(user=request.user.id)
        if request.user.is_authenticated and user_level.level == "3":
            return True
    
    def has_object_permission(self, request, view, obj):

        if request.user.is_superuser:
            return False

        return True

class RoleBapeg(permissions.BasePermission):
    def has_permission(self, request, view):
        user_level = UserLevel.objects.get(user=request.user.id)
        if request.user.is_authenticated and user_level.level == "4":
            return True
    
    def has_object_permission(self, request, view, obj):

        if request.user.is_superuser:
            return False

        return True