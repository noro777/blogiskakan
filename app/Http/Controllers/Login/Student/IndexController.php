<?php

namespace App\Http\Controllers\Login\Student;

use App\Http\Controllers\Controller;
use App\Models\Login\Student;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Student::all();
        return view('Login.Student.index',compact('data'));
    }
}
