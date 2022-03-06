<?php

namespace App\Http\Controllers;

use App\Models\JenisCuti;
use Illuminate\Http\Request;

class JenisCutiController extends Controller
{
    public function index(){
        $jenis_cutis = JenisCuti::get();

        return view('jenis-cuti.jenis-cuti', [
            'jenis_cutis' => $jenis_cutis,
        ]);
    }

    public function viewAdd(){
        return view('jenis-cuti.jenis-cuti-add');
    }

    public function store(Request $request){

        $request->validate([
            'nama_cuti' => 'required|string',
            'persyaratan' => 'required',
            'jatah' => 'required|integer',
            'nip_pejabat' => 'required|integer'
        ]);

        JenisCuti::create([
            'nama_cuti' => $request->nama_cuti,
            'persyaratan' => $request->persyaratan,
            'jatah' => $request->jatah,
            'nip_pejabat' => $request->nip_pejabat,
        ]);

        return redirect()->route('jenis-cuti');
    }
}
