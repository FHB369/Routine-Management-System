<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'code', 'name', 'credit', 'semester', 'type'
    ];
}
