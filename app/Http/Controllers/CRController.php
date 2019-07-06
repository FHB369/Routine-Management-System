<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Http\Request;
use App\Student;

class CRController extends Controller
{
    public function index()
    {
        $ccc = Student::where('type', '=', 'CR_STUDENT')->with(['user'])->get();

        return $ccc;
    }

    public function makeCR(Request $request, $email)
    {
        $all = User::where('email', $email)->get();
        if (count($all) != 0) {
            $students = Student::where('user_id', $all[0]->id)->get();


            // return $students;

            if (count($students) != 0) {
                Student::where('reg_no', $students[0]->reg_no)->update(['type' => 'CR_STUDENT']);
                return "Added Successfully";
            }
        } else {
            return "No such student found";
        }
    }

    public function deleteCR(Request $request, $email)
    {
        $all = User::where('email', $email)->get();
        if (count($all) != 0) {
            $students = Student::where('user_id', $all[0]->id)->get();


            // return $students;

            if (count($students) != 0) {
                Student::where('reg_no', $students[0]->reg_no)->update(['type' => 'GEN_STUDENT']);
                return "Added Successfully";
            }
        } else {
            return "No such student found";
        }
    }
}
