<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoutinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routines', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('department');
            $table->string('session');
            $table->string('semester');
            $table->string('section');
            $table->string('day');
            $table->string('t8_9_course')->nullable(true);
            $table->string('t8_9_classroom')->nullable(true);
            $table->string('t9_10_course')->nullable(true);
            $table->string('t9_10_classroom')->nullable(true);
            $table->string('t10_11_course')->nullable(true);
            $table->string('t10_11_classroom')->nullable(true);
            $table->string('t11_12_course')->nullable(true);
            $table->string('t11_12_classroom')->nullable(true);
            $table->string('t12_1_course')->nullable(true);
            $table->string('t12_1_classroom')->nullable(true);
            $table->string('t2_3_course')->nullable(true);
            $table->string('t2_3_classroom')->nullable(true);
            $table->string('t3_4_course')->nullable(true);
            $table->string('t3_4_classroom')->nullable(true);
            $table->string('t4_5_course')->nullable(true);
            $table->string('t4_5_classroom')->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('routines');
    }
}
