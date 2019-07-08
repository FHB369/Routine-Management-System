<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Http\Request;
use App\Student;
use Illuminate\Support\Facades\Auth;
use App\Teacher;

class UserController extends Controller
{
    public function logoutApi()
    {
        if (Auth::check()) {
            Auth::user()->AauthAcessToken()->delete();
        }
    }

    public function dept()
    {
        $id = Auth::id();
        $user = User::find($id);
        $student = $user->student;
        $teacher = $user->teacher;

        if ($student == null && $teacher != null) {
            return $teacher->department;
        } elseif ($teacher == null && $student != null) {
            return $student->department;
        }
    }
}
