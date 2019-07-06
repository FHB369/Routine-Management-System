<?php

use Illuminate\Http\Request;

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
