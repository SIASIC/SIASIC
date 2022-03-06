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
        Schema::table('form_cutis', function (Blueprint $table) {
            $table->foreignId('jenis_cuti_id')
                ->constrained('jenis_cutis')
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
        Schema::table('form_cutis', function (Blueprint $table) {
            $table->dropColumn('jenis_cuti_id');
        });
    }
};
