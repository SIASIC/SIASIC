<?php

namespace App\Http\Controllers;

use App\Models\FormCuti;
use App\Models\JenisCuti;
use Illuminate\Http\Request;

class FormCutiController extends Controller
{
    public function index(){
        $form_cutis = FormCuti::orderBy('created_at', 'desc')->with(['jenis_cuti'])->paginate(10);

        $jenis_cutis = JenisCuti::get();

        return view('form-cuti.form-cuti', [
            'form_cutis' => $form_cutis,
        ]);
    }

    public function viewAdd(){
        $jenis_cutis = JenisCuti::get();
        
        return view('form-cuti.form-cuti-add', [
            'jenis_cutis' => $jenis_cutis,
        ]);
    }

    public function store(Request $request){
        
        $total_waktu = "";

        $request->validate([
            'nip' => 'required|integer',
            'nama' => 'required|string',
            'jabatan' => 'required|string',
            'unit_kerja' => 'required|string',
            'masa_kerja' => 'required|integer',
            'jenis_cuti' => 'required|string',
            'alasan' => 'required|string',
            'selama' => 'required|string',
            'waktu' => 'required|string',
            'mulai' => 'required|date',
            'sampai' => 'required|date',
            'alamat' => 'required|string',
            'telp' => 'required|integer',
            'catatan_cuti' => 'required',
        ]);

        if($request->waktu == "bulan"){
            $total_waktu = $request->selama * 30;
        } elseif ($request->waktu == "tahun") {
            $total_waktu = $request->selama * 365;
        }

        $request->user()->form_cutis()->create([
            'pns_nip' => $request->nip,
            'pns_nama' => $request->nama,
            'pns_unit_kerja' => $request->unit_kerja,
            'pns_jabatan' => $request->jabatan,
            'pns_masa_kerja' => $request->masa_kerja,
            'alasan' => $request->alasan,
            'selama' => $total_waktu,
            'tanggal_mulai' => $request->mulai,
            'tanggal_akhir' => $request->sampai,
            'catatan_cuti' => $request->catatan_cuti,
            'alamat' => $request->alamat,
            'jenis_cuti_id' => $request->jenis_cuti
        ]);

        return redirect()->route('form-cuti');
    }
}
