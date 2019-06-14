<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Student;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $id = Auth::id();
        // $email = DB::table('students')->where('user_id', $id)->value('session');
        // if ($email == '2016-17') {
        //     return view('home');
        // } else {
        //     return view('welcome');
        // }


        $user = User::find($id);
        $student = $user->student;
        $teacher = $user->teacher;

        if ($student == null && $teacher != null) {
            if ($teacher->type == "GEN_TEACHER") {
                return view('dashboards/gen_teacher_dashboard');
            } elseif ($teacher->type == "ADMIN_TEACHER") {
                return view('dashboards/admin_teacher_dashboard');
            }
        } elseif ($teacher == null && $student != null) {
            if ($student->type == "GEN_STUDENT") {
                return view('dashboards/gen_student_dashboard');
            } elseif ($student->type == "CR_STUDENT") {
                return view('dashboards/cr_student_dashboard');
            }
        }
    }
}
