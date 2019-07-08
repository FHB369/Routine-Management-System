<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Routine extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'department', 'session', 'semester', 'section', 'day', 't8_9_course', 't8_9_classroom', 't9_10_course', 't9_10_classroom',
        't10_11_course', 't10_11_classroom', 't11_12_course', 't11_12_classroom', 't12_1_course', 't12_1_classroom', 't2_3_course', 'r2_3_classroom',
        't3_4_course', 't3_4_classroom', 't4_5_course', 't4_5_classroom'
    ];
}
