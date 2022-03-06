<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_cutis', function (Blueprint $table) {
            $table->id();
            $table->string('pns_nip', 18);
            $table->string('pns_nama', 100);
            $table->string('pns_unit_kerja', 100);
            $table->string('pns_jabatan', 100);
            $table->smallInteger('pns_masa_kerja');
            $table->text('alasan');
            $table->integer('selama');
            $table->date('tanggal_mulai');
            $table->date('tanggal_akhir');
            $table->json('catatan_cuti');
            $table->text('alamat');
            $table->string('atasan_nip', 18)->nullable();
            $table->enum('persetujuan_atasan', ['disetujui', 'perubahan', 'ditangguhkan', 'tidak setuju'])->nullable();
            $table->string('form_scan_berstempel', 100)->nullable();
            $table->string('nip_pejabat', 18)->nullable();
            $table->enum('persetujuan_pejabat', ['disetujui', 'perubahan', 'ditangguhkan', 'tidak setuju'])->nullable();
            $table->string('form_scan_tanda_tangan', 100)->nullable();
            $table->timestamps();

            // ! Tidak termasuk foreigh key pengguna dan jenis cuti
            $table->foreignId('user_id')
                ->constrained('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('form_cutis');
    }
};
