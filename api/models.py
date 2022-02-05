from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class JenisCuti(models.Model):
    nama_cuti = models.CharField(max_length=50)
    persyaratan = models.TextField()
    jatah = models.IntegerField()
    nip_pejabat = models.CharField(max_length=18)

class FormCuti(models.Model):
    JENIS_PERSETUJUAN = [
        ('DS', 'Disetujui'),
        ('P', 'Perubahan'),
        ('DT', 'Ditangguhkan'),
        ('TDS', 'Tidak Disetujui'),
    ]
    pns_id = models.CharField(max_length=18)
    pns_nama = models.CharField(max_length=100)
    pns_unit_kerja = models.CharField(max_length=100)
    pns_jabatan = models.CharField(max_length=100)
    pns_masa_kerja = models.IntegerField()
    jenis_cuti_id = models.ForeignKey(JenisCuti, on_delete=models.SET_NULL, null=True)
    alasan = models.TextField()
    selama = models.IntegerField()
    tanggal_mulai = models.DateField()
    tanggal_akhir = models.DateField()
    catatan_cuti = models.JSONField()
    alamat = models.TextField()
    no_telp = models.CharField(max_length=13)
    atasan_nip = models.CharField(max_length=18)
    persetujuan_atasan = models.CharField(
        max_length= 3,
        choices=JENIS_PERSETUJUAN,
    )
    form_scan_berstempel = models.CharField(max_length=100)
    nip_pejabat = models.CharField(max_length=100)
    persetujuan_pejabat = models.CharField(
        max_length= 3,
        choices=JENIS_PERSETUJUAN,
    )
    form_scan_bertanda_tangan = models.CharField(max_length=100)
    pengisi = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
class FilePersyaratan(models.Model):
    form_cuti_id = models.ForeignKey(FormCuti, on_delete=models.CASCADE, null=True)
    path = models.TextField()

class UserLevel(models.Model):
    LEVEL = [
        ('1', 'Admin'),
        ('2', 'Atasan'),
        ('3', 'Pejabat'),
        ('4', 'Bapeg'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nip = models.CharField(max_length=18, null=True)
    Level = models.CharField(
        max_length= 3,
        choices=LEVEL,
    )

class UnitKerja(models.Model):
    api_unit_kerja_id = models.IntegerField()
    atasan = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

class Bapeg(models.Model):
    unit_kerja_id = models.ForeignKey(UnitKerja, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)