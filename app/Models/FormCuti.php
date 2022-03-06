<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormCuti extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'pns_nip',
        'pns_nama',
        'pns_unit_kerja',
        'pns_jabatan',
        'pns_masa_kerja',
        'alasan',
        'selama',
        'tanggal_mulai',
        'tanggal_akhir',
        'catatan_cuti',
        'alamat',
        'atasan_nip',
        'persetujuan_atasan',
        'form_scan_berstempel',
        'nip_pejabat',
        'persetujuan_pejabat',
        'form_scan_tanda_tangan',
        'user_id',
    ];
}
