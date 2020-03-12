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
Route::resource('countries','CountryController');
// Route::post('countries/{country}', 'CountryController@store');
// Route::put('country/{country}','CountryController@update');
// Route::delete('country/{country}','CountryController@destroy');

Route::resource('departaments','DepartamentController');
Route::resource('cities','CityController');
// Route::post('departaments/{departament}', 'DepartamentController@store');
// Route::put('departaments/{departament}','DepartamentController@update');
// Route::delete('departaments/{departament}','DepartamentController@destroy');
Route::post('oauth/token', '\vendor\laravel\passport\src\Http\Controllers\AccessTokenController@issueToken ');
