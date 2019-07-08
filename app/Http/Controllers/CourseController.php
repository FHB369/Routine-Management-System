<?php

namespace App\Http\Controllers;

use App\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();

        return $courses->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'code' => 'required',
            'name' => 'required',
            'credit' => 'required',
            'semester' => 'required',
            'type' => 'required',
        ]);

        $course = Course::create([
            'name' => $validatedData['name'],
            'code' => $validatedData['code'],
            'credit' => $validatedData['credit'],
            'semester' => $validatedData['semester'],
            'type' => $validatedData['type'],
        ]);

        return response()->json('Course created!');
    }

    public function semester(Request $request, $semester)
    {
        $courses = Course::where('semester', $semester)->get();
        return $courses->toJson();
    }
}
