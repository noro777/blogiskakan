<?php

namespace App\Http\Controllers\Login\Student;

use App\Http\Controllers\Controller;
class CreateController extends Controller
{
    public function __invoke()
    {
        return view('Login.Student.create');
    }
}
