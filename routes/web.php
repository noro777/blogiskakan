<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('leyout.app');
});

Route::get('/registerr', function () {
    return view('leyout.register');
});

// Route::group(['namespace'=>'Work'],function(){

// });



Route::group(['namespace'=>'Login'], function(){
    Route::group(['namespace' => 'Student', 'prefix'=>'usanogh'], function(){
    // Route::get('/','IndexController')->name('student.index');
    Route::get('/register','CreateController')->name('usanogh.register');
    Route::post('/','StoreController')->name('usanogh.store');
    // Route::get('/{student}','ShowController')->name('student.show');
    // Route::get('/{student}/edit','EditController')->name('student.edit');
    // Route::patch('/{student}','UpdateController')->name('student.update');
    // Route::delete('/{student}','DeleteController')->name('student.delete');
    });
    // Route::group(['namespace' => 'Partner', 'prefix'=>'partners'], function(){
        // Route::get('/','IndexController')->name('partner.index');
        // Route::get('/create','CreateController')->name('student.create');
        // Route::post('/','StoreController')->name('student.store');
        // Route::get('/{student}','ShowController')->name('student.show');
        // Route::get('/{student}/edit','EditController')->name('student.edit');
        // Route::patch('/{student}','UpdateController')->name('student.update');
        // Route::delete('/{student}','DeleteController')->name('student.delete');
    // });
    Route::group(['namespace' => 'Lecturer', 'prefix'=>'dasaxos'], function(){
        // Route::get('/','IndexController')->name('lecturer.index');
        Route::get('/register','CreateController')->name('dasaxos.register');
        Route::post('/','StoreController')->name('dasaxos.store');
        // Route::get('/{student}','ShowController')->name('student.show');
        // Route::get('/{student}/edit','EditController')->name('student.edit');
        // Route::patch('/{student}','UpdateController')->name('student.update');
        // Route::delete('/{student}','DeleteController')->name('student.delete');
    });
    // Route::group(['namespace' => 'Institution', 'prefix'=>'institutions'], function(){
        // Route::get('/','IndexController')->name('institution.index');
        // Route::get('/create','CreateController')->name('institution.create');
        // Route::post('/','StoreController')->name('institution.store');
        // Route::get('/{student}','ShowController')->name('student.show');
        // Route::get('/{student}/edit','EditController')->name('student.edit');
        // Route::patch('/{student}','UpdateController')->name('student.update');
        // Route::delete('/{student}','DeleteController')->name('student.delete');
    // });
    Route::group(['namespace' => 'Guest', 'prefix'=>'hyur'], function(){
        // Route::get('/','IndexController')->name('guest.index');
        Route::get('/register','CreateController')->name('hyur.register');
        Route::post('/','StoreController')->name('hyur.store');
        // Route::get('/{student}','ShowController')->name('student.show');
        // Route::get('/{student}/edit','EditController')->name('student.edit');
        // Route::patch('/{student}','UpdateController')->name('student.update');
        // Route::delete('/{student}','DeleteController')->name('student.delete');
    });
    Route::group(['namespace' => 'Employer', 'prefix'=>'gorcatu'], function(){
        // Route::get('/','IndexController')->name('employer.index');
        Route::get('/register','CreateController')->name('gorcatu.register');
        Route::post('/','StoreController')->name('gorcatu.store');
        // Route::get('/{student}','ShowController')->name('employer.show');
        // Route::get('/{student}/edit','EditController')->name('employer.edit');
        // Route::patch('/{student}','UpdateController')->name('employer.update');
        // Route::delete('/{student}','DeleteController')->name('employer.delete');
    });

});

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
