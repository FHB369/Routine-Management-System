<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('crs', 'CRController@index');
Route::put('crs/{email}', 'CRController@makeCR');
Route::put('crs/delete/{email}', 'CRController@deleteCR');
Route::get('adminTeachers', 'AdminTeacherController@index');
Route::put('adminTeachers/{email}', 'AdminTeacherController@makeAdmin');
Route::put('adminTeachers/delete/{email}', 'AdminTeacherController@deleteAdmin');

Route::get('classrooms', 'ClassroomController@index');
Route::post('classrooms', 'ClassroomController@store');
Route::get('courses', 'CourseController@index');
Route::post('courses', 'CourseController@store');
Route::put('courses/{semester}', 'CourseController@semester');

Route::post('logout', 'UserController@logoutApi');
Route::get('dept/', 'UserController@dept');

Route::get('routine/{department}/{session}/{semester}/{section}/{day}', 'RoutineController@getDay');
Route::put('routine/{department}/{session}/{semester}/{section}/{day}/{slot}/{course}/{classroom}', 'RoutineController@putSlot');
Route::post('routine/', 'RoutineController@postDay');
Route::get('routine/{department}/{session}/{semester}/{section}', 'RoutineController@getAll');
