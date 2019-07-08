<?php

namespace App\Http\Controllers;

use App\Routine;
use Illuminate\Http\Request;

class RoutineController extends Controller
{
    public function getDay($department, $session, $semester, $section, $day)
    {
        $routine = Routine::where('department', $department)
            ->where('session', $session)
            ->where('semester', $semester)
            ->where('section', $section)
            ->where('day', $day)
            ->get();

        return $routine->toJson();
    }

    public function getAll($department, $session, $semester, $section)
    {
        $routine = Routine::where('department', $department)
            ->where('session', $session)
            ->where('semester', $semester)
            ->where('section', $section)
            ->get();

        return $routine->toJson();
    }

    public function putSlot(Request $request, $department, $session, $semester, $section, $day, $slot, $course, $classroom)
    {
        $routine = Routine::where('department', $department)
            ->where('session', $session)
            ->where('semester', $semester)
            ->where('section', $section)
            ->where('day', $day)
            ->get();


        if (count($routine) != 0) {
            Routine::where('department', $department)
                ->where('session', $session)
                ->where('semester', $semester)
                ->where('section', $section)
                ->where('day', $day)
                ->update(['t' . strval($slot) . '_course' => $course, 't' . strval($slot) . '_classroom' => $classroom]);

            return "Routine Updated";
        } else {
            return "Routine update failed";
        }
    }

    public function postDay(Request $request)
    {
        $validatedData = $request->validate([
            'department' => 'required',
            'session' => 'required',
            'semester' => 'required',
            'section' => 'required',
            'day' => 'required',
            't8_9_course' => 'nullable',
            't8_9_classroom' => 'nullable',
            't9_10_course' => 'nullable',
            't9_10_classroom' => 'nullable',
            't10_11_course' => 'nullable',
            't10_11_classroom' => 'nullable',
            't11_12_course' => 'nullable',
            't11_12_classroom' => 'nullable',
            't12_1_course' => 'nullable',
            't12_1_classroom' => 'nullable',
            't2_3_course' => 'nullable',
            't2_3_classroom' => 'nullable',
            't3_4_course' => 'nullable',
            't3_4_classroom' => 'nullable',
            't4_5_course' => 'nullable',
            't4_5_classroom' => 'nullable'
        ]);

        $routine = Routine::create([
            'department' =>  $validatedData['department'],
            'session' =>  $validatedData['session'],
            'semester' =>  $validatedData['semester'],
            'section' =>  $validatedData['section'],
            'day' =>  $validatedData['day'],
            't8_9_course' =>  $validatedData['t8_9_course'],
            't8_9_classroom' =>  $validatedData['t8_9_classroom'],
            't9_10_course' => $validatedData['t9_10_course'],
            't9_10_classroom' => $validatedData['t9_10_classroom'],
            't10_11_course' => $validatedData['t10_11_course'],
            't10_11_classroom' => $validatedData['t10_11_classroom'],
            't11_12_course' => $validatedData['t11_12_course'],
            't11_12_classroom' => $validatedData['t11_12_classroom'],
            't12_1_course' => $validatedData['t12_1_course'],
            't12_1_classroom' => $validatedData['t12_1_classroom'],
            't2_3_course' => $validatedData['t2_3_course'],
            't2_3_classroom' => $validatedData['t2_3_classroom'],
            't3_4_course' => $validatedData['t3_4_course'],
            't3_4_classroom' => $validatedData['t3_4_classroom'],
            't4_5_course' => $validatedData['t4_5_course'],
            't4_5_classroom' => $validatedData['t4_5_classroom']
        ]);

        return response()->json('Course created!');
    }
}
