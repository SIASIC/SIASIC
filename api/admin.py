from django.contrib import admin

# Register your models here.

from .models import JenisCuti
from .models import FormCuti
from .models import FilePersyaratan
from .models import UnitKerja
from .models import Bapeg
from .models import UserLevel


admin.site.register(JenisCuti)
admin.site.register(FormCuti)
admin.site.register(FilePersyaratan)
admin.site.register(UnitKerja)
admin.site.register(Bapeg)
admin.site.register(UserLevel)