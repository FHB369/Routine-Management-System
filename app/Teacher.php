<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Teacher extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'department', 'type', 'designation', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
