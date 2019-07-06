<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Http\Request;
use App\Teacher;

class AdminTeacherController extends Controller
{
    public function index()
    {
        $ccc = Teacher::where('type', '=', 'ADMIN_TEACHER')->with(['user'])->get();

        return $ccc;
    }

    public function makeAdmin(Request $request, $email)
    {
        $all = User::where('email', $email)->get();
        if (count($all) != 0) {
            $teachers = Teacher::where('user_id', $all[0]->id)->get();


            // return $teachers;

            if (count($teachers) != 0) {
                Teacher::where('user_id', $teachers[0]->user_id)->update(['type' => 'ADMIN_TEACHER']);
                return "Added Successfully";
            }
        } else {
            return "No such teacher found";
        }
    }

    public function deleteAdmin(Request $request, $email)
    {
        $all = User::where('email', $email)->get();
        if (count($all) != 0) {
            $teachers = Teacher::where('user_id', $all[0]->id)->get();


            // return $teachers;

            if (count($teachers) != 0) {
                Teacher::where('user_id', $teachers[0]->user_id)->update(['type' => 'GEN_TEACHER']);
                return "Added Successfully";
            }
        } else {
            return "No such teacher found";
        }
    }
}
