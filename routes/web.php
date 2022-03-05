<?php

use Illuminate\Support\Facades\Route;

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
    return "form cuti";
})->name('form-cuti');

// ! Unit Kerja

Route::middleware(['auth:sanctum', 'verified'])->get('/unit-kerja', function () {
    return "unit kerja";
})->name('unit-kerja');

// ! Jenis Cuti

Route::middleware(['auth:sanctum', 'verified'])->get('/jenis-cuti', function () {
    return "jenis cuti";
})->name('jenis-cuti');
