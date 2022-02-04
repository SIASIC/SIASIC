from django.db import models

# Create your models here.

class JatahCuti(models.Model):
    nama_cuti = models.CharField(max_length=50)
    persyaratan = models.TextField()
    jatah = models.IntegerField()
    nip_pejabat = models.CharField(max_length=18)