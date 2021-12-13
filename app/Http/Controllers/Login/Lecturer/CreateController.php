<?php

namespace App\Http\Controllers\Login\Lecturer;

use App\Http\Controllers\Controller;


class CreateController extends Controller
{
    public function __invoke()
    {
        return view('Login.Lecturer.create');
    }
}
