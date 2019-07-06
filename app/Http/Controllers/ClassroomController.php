<?php

namespace App\Http\Controllers;

use App\Classroom;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::all();

        return $classrooms->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'room_number' => 'required',
            'building' => 'required',
            'floor' => 'required',
            'type' => 'required',
            'capacity' => 'required',
        ]);

        $classroom = Classroom::create([
            'room_number' => $validatedData['room_number'],
            'building' => $validatedData['building'],
            'floor' => $validatedData['floor'],
            'type' => $validatedData['type'],
            'capacity' => $validatedData['capacity'],
        ]);

        return response()->json('Classroom created!');
    }
}
