<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Student extends Model
{

    public $timestamps = false;

    protected $fillable = [
        'department', 'type', 'reg_no', 'session', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
