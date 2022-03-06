<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormCutiController;
use App\Http\Controllers\JenisCutiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('welcome');
});

// ! Dashboard

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

// ! Form Cuti

Route::middleware(['auth:sanctum', 'verified'])->get('/form-cuti', function () {
    return view('form-cuti.form-cuti');
})->name('form-cuti');

Route::middleware(['auth'])->group(function () {
    
    // Dashboard form cuti
    Route::get('/form-cuti', [FormCutiController::class, 'index'])->name('form-cuti');

    // Form tambah pengajuan cuti
    Route::get('/form-cuti/add', [FormCutiController::class, 'viewAdd'])->name('form-cuti-add');
    Route::post('/form-cuti/add', [FormCutiController::class, 'store']);

});

// ! Unit Kerja

Route::middleware(['auth:sanctum', 'verified'])->get('/unit-kerja', function () {
    return "unit kerja";
})->name('unit-kerja');



// ! Jenis Cuti

Route::middleware(['auth'])->group(function () {
    
    // Dashboard form cuti
    Route::get('/jenis-cuti', [JenisCutiController::class, 'index'])->name('jenis-cuti');

    // Form tambah pengajuan cuti
    Route::get('/jenis-cuti/add', [JenisCutiController::class, 'viewAdd'])->name('jenis-cuti-add');
    Route::post('/jenis-cuti/add', [JenisCutiController::class, 'store']);

});

// Route::middleware(['auth:sanctum', 'verified'])->get('/jenis-cuti', function () {
//     return "jenis cuti";
// })->name('jenis-cuti');
