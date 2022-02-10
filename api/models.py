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
    jenis_cuti = models.ForeignKey(JenisCuti, 
        related_name='jenis_cuti',
        on_delete=models.SET_NULL, null=True)
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
    pengisi = models.ForeignKey(User,
        related_name='pengisi',
        on_delete=models.SET_NULL, null=True)
class FilePersyaratan(models.Model):
    form_cuti = models.ForeignKey(FormCuti, 
        related_name='file_syarat',
        on_delete=models.CASCADE, null=True)
    path = models.TextField()

class UserLevel(models.Model):
    LEVEL = [
        ('1', 'Admin'),
        ('2', 'Atasan'),
        ('3', 'Pejabat'),
        ('4', 'Bapeg'),
    ]

    user = models.OneToOneField(User,
        related_name='role',
        on_delete=models.CASCADE)
    nip = models.CharField(max_length=18, null=True)
    level = models.CharField(
        max_length= 3,
        choices=LEVEL,
    )

class UnitKerja(models.Model):
    api_unit_kerja = models.IntegerField()
    atasan = models.ForeignKey(User, 
        related_name='atasan_unit',
        on_delete=models.SET_NULL, 
        null=True)

class Bapeg(models.Model):
    unit_kerja = models.ForeignKey(UnitKerja, 
        related_name='tempat_unit',
        on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, 
        related_name='anggota_unit',
        on_delete=models.CASCADE, null=True)