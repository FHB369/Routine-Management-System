<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('/');

Route::get('/dash', function () {
    return view('dashboards.demo_dash');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/adminTeacher/createRoutine', 'HomeController@index');
Route::get('/home/adminTeacher/modifyRoutine', 'HomeController@index');
Route::get('/home/adminTeacher/showRoutine', 'HomeController@index');

Route::get('/home/cr/modifyRoutine', 'HomeController@index');
Route::get('/home/cr/showRoutine', 'HomeController@index');

Route::get('/home/teacher/modifyRoutine', 'HomeController@index');
Route::get('/home/teacher/showRoutine', 'HomeController@index');
Route::get('/home/student/showRoutine', 'HomeController@index');
