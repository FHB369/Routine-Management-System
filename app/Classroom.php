<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'room_number', 'building', 'floor', 'type', 'capacity'
    ];
}
